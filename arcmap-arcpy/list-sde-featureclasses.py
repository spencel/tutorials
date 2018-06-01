import os
import arcpy

# Constants
SDE_PATH = r"C:\Users\slank\AppData\Roaming\ESRI\Desktop10.3\ArcCatalog\Atlas.sde"

# Mxd settings
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

# Sde settings
## set sde path
arcpy.env.workspace = SDE_PATH
atlasSdeFeatureDatasetList = arcpy.ListDatasets()
print( atlasSdeFeatureDatasetList )
atlasSdeFeatureClassList = arcpy.ListFeatureClasses( "*" )
print( atlasSdeFeatureClassList )
arcpy.env.workspace = mxdDirectory