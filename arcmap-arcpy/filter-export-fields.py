import os
import arcpy

# get parameters
featureClassName = "SDW_CITY_W_PIPE"
queryField = 'MATERIALD'
# get unique materials
with arcpy.da.SearchCursor( featureClassName, [queryField]) as cursor:
	materials = sorted({row[0] for row in cursor})

# get gdb path
## get mxd
mxd = arcpy.mapping.MapDocument( "CURRENT" )
## get mxd path
mxdPath = mxd.filePath
## get mxd name
mxdName = os.path.basename( mxdPath )
## get mxd directory and use it as the gdb directory too
gdbDirectory = os.path.dirname( mxdPath )
## set the gdb name same as mxd name
gdbName = os.path.splitext( mxdName )[0] + ".gdb"
## get gdb path
gdbPath =gdbDirectory + "\\" + gdbName

# create field map
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
fieldMappings.removeAll()
fieldMappings.addTable( featureClassName )
i = 0
while i < fieldMappings.fieldCount:
	if fieldMappings.getFieldMap(i).getInputFieldName(0) not in exportFields:
		fieldMappings.removeFieldMap(i)
	else:
		i += 1

# save a W_PIPE feature class for each material to a gdb
for i, material in enumerate( materials ):
	# get parameters
	selectionType = "NEW_SELECTION"
	sqlQuery = queryField + " = '" + material + "'"
	# set export feature class name as name of layer plus pipe material, replace spaces with underscores
	exportFeatureClassName = ( featureClassName + "_" + material ).replace( " ", "_" )
	arcpy.FeatureClassToFeatureClass_conversion( featureClassName, gdbPath, exportFeatureClassName, sqlQuery, fieldMappings )