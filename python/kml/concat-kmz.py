import sys
import io
import os
import zipfile

kmzPath = "C:\\Users\\slank\\Desktop\\arcpy-dev\\W_PIPE_ASBESTOS_CEMENT.kmz"

kmlFileName = "doc.kml"

with zipfile.ZipFile( kmzPath, "r" ) as kmzFile:
	with kmzFile.open( kmlFileName, "r" ) as kmlFile:
		strKml = kmlFile.read()
		print( strKml )