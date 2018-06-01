import arcpy

# get feature class
featureClassName = "W_PIPE_UNKNOWN"
# get gdb path
## get mxd
mxd = arcpy.mapping.MapDocument( "CURRENT" )
## get mxd path
mxdPath = mxd.filePath
## set geoprocessing results directory to the same as mxd's
arcpy.env.workspace = os.path.dirname( mxdPath )
## get mxd name
mxdName = os.path.basename( mxdPath )
## set mxd directory and use it as the kmz directory too
kmzDirectory = os.path.dirname( mxdPath )
## set the kmz name same as feature class name
kmzName = featureClassName + ".kmz"
## convert feature class to kmz
arcpy.LayerToKML_conversion ( featureClassName, kmzName )