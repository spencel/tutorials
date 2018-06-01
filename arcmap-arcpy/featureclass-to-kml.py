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

# Export feature class to kml
## set feature class path
gdbFeatureClassPath = mxdDirectory + "\\mxd.gdb\\W_PIPE"
print( "gdbFeatureClassPath: " + gdbFeatureClassPath )
## get unique materials
#exportFields = "INSD_DIAM_SIZE_NUM; MATERIALD; LGTH_QTY; INST_DT; PRESSR_ZN_QTY; FAC_SEQ_NUM; DRAWG_NUM; DRAWG_TYP_CD; DRAWG_SHEET_NUM"
exportFields = [ "INSD_DIAM_SIZE_NUM", "MATERIALD", "LGTH_QTY", "INST_DT", "PRESSR_ZN_QTY", "FAC_SEQ_NUM", "DRAWG_NUM", "DRAWG_TYP_CD", "DRAWG_SHEET_NUM", "SHAPE@" ]
sortField = "MATERIALD"
#for i, row in enumerate( arcpy.SearchCursor( gdbFeatureClassPath, fields=exportFields, sort_fields=sortField ) ):

for i, row in enumerate( arcpy.da.SearchCursor( gdbFeatureClassPath, fields=exportFields, sort_fields=sortField ) ):
	#print( row.getValue( "SHAPE@" ) )
	if i == 5:
		break