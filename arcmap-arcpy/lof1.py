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
inputLayer = getLayer( mxd, dataFrame, "LOF1 Pipe Age\\Input Layers\\W_PIPE" )
outputLayer = getLayer( mxd, dataFrame, "LOF1 Pipe Age\\City_LOF1_Results")
print( "outputLayer.name: " + outputLayer.name)
'''
cursor = arcpy.SearchCursor( outputLayer )
row = cursor.next()
while row:
	print( row.getValue( "SHAPE@"))
	row = cursor.next()
'''
for row in arcpy.da.SearchCursor(outputLayer, field_names=["SHAPE@"]):
	print(row[0].centroid)