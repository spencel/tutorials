import arcpy

# get feature class
featureClassName = "SDW.CITY.W_PIPE"
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
gdbPath = gdbDirectory + "\\" + gdbName
## create the gdb
arcpy.FeatureClassToGeodatabase_conversion( featureClassName, gdbPath )