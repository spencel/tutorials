import sys
import os
import arcpy

# Constants
FEATURE_CLASS_NAME = "W_PIPE"

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
arcpy.env.workspace = mxdDirectory


# Main Program
targetDataFrame = thisMxd.activeDataFrame
targetFeatureClass = 