import sys
import os
import arcpy

# Constants
SDE_PATH = "C:\Users\slank\AppData\Roaming\ESRI\Desktop10.3\ArcCatalog\Atlas.sde"
SDE_DATASET_NAME_LIST = [ "SDW.CITY.WATER", "SDW.CITY.SEWER", "SDW.CITY.RWATER", "SDW.CITY.STORM_WATER" ]
SDE_FEATURECLASS_PREFIX_LIST = [ "SDW.CITY.W_", "SDW.CITY.S_", "SDW.CITY.RW_", "" ]
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
## get mxd directory and use it as the gdb directory too
gdbDirectory = os.path.dirname( mxdPath )
## set the gdb name same as mxd name
gdbName = os.path.splitext( mxdName )[0] + ".gdb"
## get gdb path
gdbPath = gdbDirectory + "\\" + gdbName
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
for i in range( len( SDE_DATASET_NAME_LIST ) ):
	## check if water system feature dataset is there
	if SDE_DATASET_NAME_LIST[ i ] not in atlasSdeDatasetNameList:
		print( "ERROR: Water system feature dataset \"" + SDE_DATASET_NAME_LIST[ i ] + "\" in sde could not be found." )
		sys.exit()
	#print( atlasSdeDatasetNameList )
	## get list of feature classes
	arcpy.env.workspace = SDE_PATH
	atlasSdeFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=SDE_DATASET_NAME_LIST[ i ] )
	arcpy.env.workspace = mxdDirectory
	#print( atlasSdeFeatureClassNameList )
	## check if there are any feature classes
	if len( atlasSdeFeatureClassNameList ) == 0:
		print( "ERROR: Water system feature dataset in sde either has no feature classes or feature class prefix is not recognized." )
		sys.exit()
	## set name of feature dataset in gdb
	gdbDatasetName = SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" )
	## check if feature dataset already exists in gdb
	arcpy.env.workspace = gdbPath
	gdbDatasetNameList = arcpy.ListDatasets()
	#print( "mxdDirectory: " + mxdDirectory )
	arcpy.env.workspace = mxdDirectory
	#print( "arcpy.env.workspace: " + str( arcpy.env.workspace ) )
	## create the feature dataset if it doesn't exist
	if gdbDatasetName in gdbDatasetNameList:
		#print( "gdbPath: " + gdbPath )
		#print( "gdbDatasetName: " + gdbDatasetName )
		#print( arcpy.SpatialReference( SPATIAL_REFERENCE_NAME ) )
		arcpy.env.workspace = gdbPath
		arcpy.Delete_management( gdbDatasetName )
		arcpy.env.workspace = mxdDirectory

	arcpy.CreateFeatureDataset_management ( gdbPath, gdbDatasetName, spatial_reference=arcpy.SpatialReference( SPATIAL_REFERENCE_NAME ) )

	## get list of local feature classes in feature dataset
	arcpy.env.workspace = gdbPath
	gdbFeatureClassNameList = arcpy.ListFeatureClasses( wild_card="*", feature_dataset=SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" ) )
	arcpy.env.workspace = mxdDirectory
	gdbDatasetPath = gdbPath + "\\" + SDE_DATASET_NAME_LIST[ i ].replace( ".", "_" )
	## loop through feature class names
	for atlasSdeFeatureClassName in atlasSdeFeatureClassNameList:
		# set feature class path
		sdeFeatureClassPath = SDE_PATH + "\\" + SDE_DATASET_NAME_LIST[ i ] + "\\" + atlasSdeFeatureClassName
		# add feature class to local gdb if it has the correct prefix
		if atlasSdeFeatureClassName.startswith( SDE_FEATURECLASS_PREFIX_LIST[ i ] ) == True:
			# add feature class to local gdb
			arcpy.FeatureClassToGeodatabase_conversion( sdeFeatureClassPath, gdbDatasetPath )
		# warn user if data doesn't have a recognized water system prefix
		elif atlasSdeFeatureClassName.startswith( SDE_FEATURECLASS_PREFIX_LIST[ i ] ) == False:
			print( "WARNING: " + atlasSdeFeatureClassName + " does not have a recognized prefix" )