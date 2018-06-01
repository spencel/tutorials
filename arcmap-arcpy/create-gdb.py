import os
import arcpy

# get mxd name
mxd = arcpy.mapping.MapDocument( "CURRENT" )
mxdPath = mxd.filePath
mxdName = os.path.basename( mxdPath )

# create a gdb with same name and directory as the mxd
gdbDirectory = os.path.dirname( mxdPath )
gdbName = os.path.splitext( mxdName )[0] + ".gdb"
arcpy.CreateFileGDB_management( gdbDirectory, gdbName )