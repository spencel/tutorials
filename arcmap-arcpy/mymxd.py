import os
import arcpy
import pprint

class MyMxd:
	nextId = 0
	def __init__( self, mxd ):
		self.id = MyMxd.nextId
		MyMxd.nextId += 1
		self.mxd = mxd
		myDataFrames = self.populateDataFrames( mxd )
		self.myDataFrames = myDataFrames
	def populateDataFrames( self, mxd ):
		print( "MyMxd.populateDataFrames()" )
		myDataFrames = {}
		dataFrameList = arcpy.mapping.ListDataFrames( mxd )
		for dataFrame in dataFrameList:
			myDataFrame = MyDataFrame( mxd, dataFrame )
			myDataFrames[ str( myDataFrame.id ) ] = myDataFrame
		return myDataFrames

class MyDataFrame:
	nextId = 0
	def __init__( self, mxd, dataFrame ):
		self.id = MyDataFrame.nextId
		MyDataFrame.nextId += 1
		self.dataFrame = dataFrame
		myLayers = self.populateLayers( mxd, dataFrame )
		self.myLayers = myLayers
		pprint.PrettyPrinter( indent=2 ).pprint( self.myLayers )
	def populateLayers( self, mxd, dataFrame ):
		print( "MyDataFrame.populateLayers()" )
		myLayers = {}
		layerList = arcpy.mapping.ListLayers( mxd, data_frame=dataFrame ) 
		for layer in layerList:
			myLayer = MyLayer( layer )
			myLayers[ str( myLayer.id ) ] = myLayer
		return myLayers

class MyLayer:
	nextId = 0
	def __init__( self, layer ):
		self.id = MyLayer.nextId
		MyLayer.nextId += 1
		self.layer = layer