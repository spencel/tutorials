import sys
import os
import arcpy

# Parameters
## get the map document
mxd = arcpy.mapping.MapDocument( "CURRENT" )
## get current mxd path
mxdPath = mxd.filePath
## get current mxd name
mxdName = os.path.basename( mxdPath )
## get current mxd directory
mxdDirectory = os.path.dirname( mxdPath )

# Arcpy settings
## do not add geoprocessing results to mxd
arcpy.env.addOutputsToMap = False
## set geoprocessing results directory to the same as the mxd's
arcpy.env.workspace = mxdDirectory

# Export feature class from Atlas sde to a gdb with the same name and directory as the mxd
## Create the gdb
### get mxd directory and use it as the gdb directory too
gdbDirectory = mxdDirectory
### set the gdb name same as mxd name
gdbName = os.path.splitext( mxdName )[0] + ".gdb"
### get gdb path
gdbPath = gdbDirectory + "\\" + gdbName
### if the gdb does not exist then create it
if os.path.isdir( gdbPath ) == False:
	arcpy.CreateFileGDB_management( gdbDirectory, gdbName )
### else if the gdb does exist then warn user and stop script
else:
	print( "WARNING: Gdb already exists. Rename or delete it. Process terminated." )
	sys.exit()

## Expore the feature class
### get sde path
sdePath = "C:\Users\slank\AppData\Roaming\ESRI\Desktop10.3\ArcCatalog\Atlas.sde"
### get feature class name
sdeFeatureClassName = "SDW.CITY.W_PIPE"
### get feature class path
sdeFeatureClassPath = sdePath + "\\" + sdeFeatureClassName
### export feature class to gdb
arcpy.FeatureClassToGeodatabase_conversion( sdeFeatureClassPath, gdbPath )

## Export feature classes per pipe material
### get parameters
queryField = 'MATERIALD'
### get feature class name
gdbFeatureClassName = sdeFeatureClassName.replace( "SDW.CITY.", "")
print( "gdbFeatureClassName: " + gdbFeatureClassName )
### get feature class path
gdbFeatureClassPath = gdbPath + "\\" + gdbFeatureClassName
print( "gdbFeatureClassPath: " + gdbFeatureClassPath )
### get unique materials
with arcpy.da.SearchCursor( gdbFeatureClassPath, [queryField]) as cursor:
	materials = sorted({row[0] for row in cursor})
print( "materials: " + str( materials ))
### get export fields
exportFields = [
	"INSD_DIAM_SIZE_NUM",
	"MATERIALD",
	"LGTH_QTY",
	"INST_DT","Date",
	"PRESSR_ZN_QTY",
	"FAC_SEQ_NUM",
	"DRAWG_NUM",
	"DRAWG_TYP_CD",
	"DRAWG_SHEET_NUM"
]
### create a fieldMappings object
fieldMappings = arcpy.FieldMappings()
### add all fields to fieldMappings
fieldMappings.addTable( gdbFeatureClassPath )
### remove fields that are not the fields to be exported
i = 0
while i < fieldMappings.fieldCount:
	if fieldMappings.getFieldMap(i).getInputFieldName(0) not in exportFields:
		fieldMappings.removeFieldMap(i)
	else:
		i += 1
### save a feature class for each material to the gdb and also export a kmz file of it
for i, material in enumerate( materials ):
	# get parameters
	selectionType = "NEW_SELECTION"
	sqlQuery = queryField + " = '" + material + "'"
	# set export feature class name as name of layer plus pipe material, replace spaces with underscores
	exportFeatureClassName = ( gdbFeatureClassName + "_" + material ).replace( " ", "_" )
	arcpy.FeatureClassToFeatureClass_conversion( gdbFeatureClassPath, gdbPath, exportFeatureClassName, sqlQuery, fieldMappings )
	exportFeatureClassPath = gdbPath + "\\" + exportFeatureClassName
	print( "exportFeatureClassPath: " + exportFeatureClassPath )
	# export kml
	kmzFileName = exportFeatureClassName + ".kmz"
	exportFeatureLayerName = exportFeatureClassName + ".lyr"
	print( "exportFeatureLayerName: " + exportFeatureLayerName )
	arcpy.MakeFeatureLayer_management( exportFeatureClassPath , exportFeatureLayerName )
	arcpy.LayerToKML_conversion ( exportFeatureLayerName, kmzFileName )
	if i == 1:
		break