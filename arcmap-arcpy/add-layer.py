import os
import arcpy


# Add layer from an sde database

## get the map document
mxd = arcpy.mapping.MapDocument( "CURRENT" )

## get the data frame
dataFrame = arcpy.mapping.ListDataFrames( mxd, "*" )[0]

## create a new layer
sdePath = "C:\Users\slank\AppData\Roaming\ESRI\Desktop10.3\ArcCatalog\Atlas.sde"
newLayerName = "SDW.CITY.W_PIPE"
newLayerPath = sdePath + "\\" + newLayerName
newLayer = arcpy.mapping.Layer( newLayerPath )

## add the layer to the map at the bottom of the TOC in data frame 0
arcpy.mapping.AddLayer( dataFrame, newLayer, "BOTTOM" )


# Add layer from a gdb

## get the map document
mxd = arcpy.mapping.MapDocument( "CURRENT" )

## get the data frame
dataFrame = arcpy.mapping.ListDataFrames( mxd, "*" )[0]

## create a new layer
mxdPath = mxd.filePath
gdbDirectory = os.path.dirname( mxdPath )
gdbName = os.path.splitext( mxdName )[0] + ".gdb"
gdbPath = gdbDirectory + "\\" + gdbName
newLayerName = "SDW_CITY_W_PIPE"
newLayerPath = gdbPath + "\\" + newLayerName
newLayer = arcpy.mapping.Layer( newLayerPath )

## add the layer to the map at the bottom of the TOC in data frame 0
arcpy.mapping.AddLayer( dataFrame, newLayer, "BOTTOM" )