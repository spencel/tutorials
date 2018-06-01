import os
import arcpy
import pprint

mxd = arcpy.mapping.MapDocument( "CURRENT" )
dataFrame = mxd.activeDataFrame
def getLayer( mxd, dataFrame, longName ):
	layerList = arcpy.mapping.ListLayers( mxd, data_frame=dataFrame )
	for layer in layerList:
		#print( layer.longName )
		if layer.longName == longName:
			return layer
	return False
layer = getLayer( mxd, dataFrame, "COF4 Proximity to Sensitive Area\\Input Layers\\W_PIPE" )
