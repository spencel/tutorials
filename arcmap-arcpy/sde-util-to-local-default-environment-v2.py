import sys
import os
import arcpy

# Constants
SDE_NAME = "Atlas.sde"
SDE_PATH = "C:\\Users\\slank\\AppData\\Roaming\\ESRI\\Desktop10.3\\ArcCatalog\\" + SDE_NAME
#SDE_DATASET_NAME_LIST = [ "SDW.CITY.WATER", "SDW.CITY.SEWER", "SDW.CITY.RWATER", "SDW.CITY.STORM_WATER", "SDW.CITY.STREET", "SDW.CITY.SANGIS" ]
#FEATURECLASS_PREFIX_LIST = [ "SDW.CITY.W_", "SDW.CITY.S_", "SDW.CITY.RW_", "", "" ]
EXPORT_DATA = [
	{
		"DatasetName": "SDW.CITY.WATER", 
		"PrefixList":["SDW.CITY.W_"]
	},{
		"DatasetName": "SDW.CITY.SEWER", 
		"PrefixList":["SDW.CITY.S_"]
	},{
		"DatasetName": "SDW.CITY.RWATER", 
		"PrefixList":["SDW.CITY.RW_"]
	},{
		"DatasetName": "SDW.CITY.STORM_WATER", 
		"PrefixList":[]
	},{
		"DatasetName": "SDW.CITY.STREET", 
		"PrefixList":[]
	},{
		"DatasetName": "SDW.CITY.SANGIS", 
		"PrefixList":[
			"SDW.CITY.AIR_","SDW.CITY.ANNO_","SDW.CITY.DIST_",
			"SDW.CITY.FACILITIES_","SDW.CITY.HLTH_","SDW.CITY.HOSPITAL",
			"SDW.CITY.HYD_","SDW.CITY.JUR_","SDW.CITY.LAND",
			"SDW.CITY.PARCEL","SDW.CITY.RAIL","SDW.CITY.RD_",
			"SDW.CITY.RIGHT_OF_WAY","SDW.CITY.ROAD","SDW.CITY.SCHOOL"
		]
	}
]
SPATIAL_REFERENCE_NAME = "NAD 1983 StatePlane California VI FIPS 0406 (US Feet)"


# Mxd settings
## get the map document
mxd = arcpy.mapping.MapDocument( "CURRENT" )
## get current mxd path
mxdPath = mxd.filePath
## get current mxd name
mxdName = os.path.basename( mxdPath )
## get current mxd directory
mxdDirectory = os.path.dirname( mxdPath )
## create spacial reference
#sanDiegoSpatialReference = arcpy.CreateSpatialReference_management( SPATIAL_REFERENCE_NAME )


# Gdb settings
## set default workspace
arcpy.ClearEnvironment( "workspace" )
## get default workspace
defaultWorkSpacePath = arcpy.env.workspace
## convert path to a list
defaultWorkSpacePathList = defaultWorkSpacePath.split( "\\" )
## remove the last element, default.gdb, from path list
defaultWorkSpacePathList.pop()
## convert list back to path string, delimited by "\"
defaultWorkSpacePath = "\\".join( defaultWorkSpacePathList )
## set the gdb name same as the sde and make it: Local_[sde name].gdb
gdbName = "Local_" + SDE_NAME.split( "." )[0] + ".gdb"
## get gdb path
gdbPath = defaultWorkSpacePath + "\\" + gdbName
#print( gdbPath )
## create gdb if it doesn't exist
if os.path.isdir( gdbPath ) == False:
	print( "Creating gdb." )
	arcpy.CreateFileGDB_management( gdbDirectory, gdbName )


# Arcpy settings
## do not add geoprocessing results to mxd
arcpy.env.addOutputsToMap = False
## set geoprocessing results directory to the same as the mxd's
arcpy.env.workspace = mxdDirectory


# Main Program
## get list of feature datasets
arcpy.env.workspace = SDE_PATH
atlasSdeDatasetNameList = arcpy.ListDatasets()
arcpy.env.workspace = mxdDirectory
#for i in range( len( SDE_DATASET_NAME_LIST ) ):
for data in EXPORT_DATA:
	## check if water system feature dataset is there
	#if SDE_DATASET_NAME_LIST[ i ] not in atlasSdeDatasetNameList:
	datasetName = data["DatasetName"]
	if datasetName not in atlasSdeDatasetNameList:
		#print( "ERROR: Water system feature dataset \"" + SDE_DATASET_NAME_LIST[ i ] + "\" in sde could not be found." )
		print( "ERROR: Water system feature dataset \"" + datasetName + "\" in sde could not be found." )
		sys.exit()
	#print( atlasSdeDatasetNameList )
	## get list of feature classes
	arcpy.env.workspace = SDE_PATH
	#atlasSdeFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=SDE_DATASET_NAME_LIST[ i ] )
	atlasSdeFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=datasetName )
	arcpy.env.workspace = mxdDirectory
	#print( atlasSdeFeatureClassNameList )
	## check if there are any feature classes
	if len( atlasSdeFeatureClassNameList ) == 0:
		print( "ERROR: Water system feature dataset in sde either has no feature classes or feature class prefix is not recognized." )
		sys.exit()
	## set name of feature dataset in gdb
	#gdbDatasetName = SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" )
	gdbDatasetName = datasetName.replace(".","_")
	## check if feature dataset already exists in gdb
	arcpy.env.workspace = gdbPath
	gdbDatasetNameList = arcpy.ListDatasets()
	#print( "mxdDirectory: " + mxdDirectory )
	arcpy.env.workspace = mxdDirectory
	#print( "arcpy.env.workspace: " + str( arcpy.env.workspace ) )
	## create the feature dataset if it doesn't exist
	if gdbDatasetName not in gdbDatasetNameList:
		#print( "gdbPath: " + gdbPath )
		#print( "gdbDatasetName: " + gdbDatasetName )
		#print( arcpy.SpatialReference( SPATIAL_REFERENCE_NAME ) )
		#arcpy.env.workspace = gdbPath
		#arcpy.Delete_management( gdbDatasetName )
		#arcpy.env.workspace = mxdDirectory
		arcpy.CreateFeatureDataset_management ( gdbPath, gdbDatasetName, spatial_reference=arcpy.SpatialReference( SPATIAL_REFERENCE_NAME ) )
	## get list of local feature classes in feature dataset
	arcpy.env.workspace = gdbPath
	#gdbFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" ) )
	gdbFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=gdbDatasetName )
	arcpy.env.workspace = mxdDirectory
	#gdbDatasetPath = gdbPath + "\\" + SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" )
	gdbDatasetPath = gdbPath + "\\" + gdbDatasetName
	# loop through feature class namee
	'''
	for atlasSdeFeatureClassName in atlasSdeFeatureClassNameList:
		# set feature class path
		sdeFeatureClassPath = SDE_PATH + "\\" + datasetName + "\\" + atlasSdeFeatureClassName
		# add feature class to local gdb if it has the correct prefix
		if atlasSdeFeatureClassName.startswith( SDE_FEATURECLASS_PREFIX_LIST[ i ] ) == True:
			# add feature class to local gdb
			arcpy.FeatureClassToGeodatabase_conversion( sdeFeatureClassPath, gdbDatasetPath )
		# warn user if data doesn't have a recognized water system prefix
		elif atlasSdeFeatureClassName.startswith( SDE_FEATURECLASS_PREFIX_LIST[ i ] ) == False:
			print( "WARNING: " + atlasSdeFeatureClassName + " does not have a recognized prefix" )
	'''
	prefixList = data["PrefixList"]
	
	if len( prefixList ) > 0:
		for prefix in prefixList:
			print("Exporting data with prefix: %s") % ( prefix )
			for atlasSdeFeatureClassName in atlasSdeFeatureClassNameList:
				# set feature class path
				sdeFeatureClassPath = SDE_PATH + "\\" + datasetName + "\\" + atlasSdeFeatureClassName
				if atlasSdeFeatureClassName.startswith( prefix ) == True:
					# add feature class to local gdb
					arcpy.FeatureClassToGeodatabase_conversion( sdeFeatureClassPath, gdbDatasetPath )
				# warn user if data doesn't have a recognized water system prefix
				else:
					print( "WARNING: %s does not have a recognized prefix: %s" ) % ( atlasSdeFeatureClassName, prefix )

	# if prefixList is empty, then export all data from sde
	else:
		arcpy.FeatureClassToGeodatabase_conversion( sdeFeatureClassPath, gdbDatasetPath )