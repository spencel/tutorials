import sys
import os
import arcpy

# Constants
DUMMY_LAYER_FILE_NAME = "do not delete.lyr"

# Mxd settings
## get the map document
thisMxd = arcpy.mapping.MapDocument( "CURRENT" )
## get current mxd path
thisMxdPath = mxd.filePath
## get current mxd name
thisMxdName = os.path.basename( mxdPath )
## get current mxd directory
thisMxdDirectory = os.path.dirname( mxdPath )
## create spacial reference
#sanDiegoSpatialReference = arcpy.CreateSpatialReference_management( SPATIAL_REFERENCE_NAME )

# Arcpy settings
## do not add geoprocessing results to mxd
arcpy.env.addOutputsToMap = False
## set geoprocessing results directory to the same as the mxd's
arcpy.env.workspace = thisMxdDirectory


# Main Program
# get default workspace where dummy group layer file is
arcpy.ClearEnvironment( "workspace" )
# get the path of the dummy layer
dummyLayerFilePath = arcpy.env.workspace.rstrip("\\Default.gdb") + "\\" + DUMMY_LAYER_FILE_NAME
#print( dummyLayerFilePath )
# create a Layer object
addThisGroupLayer = arcpy.mapping.Layer( dummyLayerFilePath )
# rename group layer to anything
addThisGroupLayer.name = "new group layer"
# get target data frame
targetDataFrame = thisMxd.activeDataFrame
# add the new group layer
arcpy.mapping.AddLayer( targetDataFrame, addThisGroupLayer, "BOTTOM" )