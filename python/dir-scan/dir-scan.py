# Author: Spencer Lank

import io
import os
import datetime

scanTheseDirectories = [
	"\\\\ad.sannet.gov\\Pubutil\\EPM\\CondAssess\\1 - Contracts and Agreements\\B&V-H135835",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\\CondAssess\\1 - Contracts and Agreements\\B&V-H146197",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Equipment",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Library",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Organizations",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Photos",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Pipe Failures",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Technologies",
	"\\\\ad.sannet.gov\\Pubutil\\EPM\CondAssess\\Web Resources"
]

ignoreThese = [ "Thumbs.db" ]

# Get all paths and add them to an array and dump them to a file
print( "Get all paths and add them to an array and dump them to a file")
for item in scanTheseDirectories:
	print("Starting scan of " + item)
	pathLength = len( item )
	timeNow = datetime.datetime.now()
	resultsFileName = "scan-" + str( timeNow.year ) + "-" + str( timeNow.month ) + "-" + str( timeNow.day ) + "-" + str( timeNow.hour ) + "-" + str( timeNow.minute ) + "-" + str( timeNow.second ) + "-" + str( timeNow.microsecond ) + ".txt"
	with io.open( resultsFileName, "w", encoding="utf-8"  ) as outputFile:
		outputFile.write( "Directory scanned: " + item + "\n" )
		outputFile.write( "Generated on: " + str( timeNow ) + "\n" )
		for root, dirs, files in os.walk( item ):
			for name in files:
				if name not in ignoreThese:
					item = root[ pathLength : ] + "\\" + name
					outputFile.write( item + "\n" )

class resultsFile():
	items = []
	sortedByNewest = []
 	
	def __init__( self, name, date ):
		self.name = name
		self.date = date
		resultsFile.items.append( self )
 
	def sortByNewest():
		dates = []
		for item in resultsFile.items:
			dates.append( item.date )
		dates = sorted( dates )
		for date in dates:
			for item in resultsFile.items:
				if date == item.date:
					resultsFile.sortedByNewest.append( item )

for item in scanTheseDirectories:
	# Get all results files and generated date for this directory
	#print("Get all results files and generated date for this directory")
	for root, dirs, files in os.walk( "." ):
		for name in files:
			if name[ : 4 ] == "scan":
				with io.open( name, "r", encoding="utf-8"  ) as file:
					line1 = file.readline().strip( "\n" )
					line2 = file.readline().strip( "\n" )
					if line1 == "Directory scanned: " + item:
						resultsFile( name, datetime.datetime.strptime( line2[ 14 : ], "%Y-%m-%d %H:%M:%S.%f" ) )

	resultsFile.sortByNewest()

	# Compare files to most recent
	#print( "Compare files to most recent" )
	length = len( resultsFile.sortedByNewest )
	for i, item in enumerate( resultsFile.sortedByNewest ):
		if i < length - 1:
			arFile1 = []
			arFile2 = []
			with io.open( resultsFile.sortedByNewest[ i ].name , "r", encoding="utf-8"  ) as file1:
				for line in file1:
					arFile1.append( line.strip( "\n" ) )
			with io.open( resultsFile.sortedByNewest[ i + 1 ].name , "r", encoding="utf-8"  ) as file2:
				for line in file2:
					arFile2.append( line.strip( "\n" ) )
			print( "File path changes from " + resultsFile.sortedByNewest[ i ].name + " to " + resultsFile.sortedByNewest[ i + 1 ].name )
			for item in arFile1:
				if item[ : 14 ] == "Generated on: ":
					pass
				elif item not in arFile2:
					print( "MISSING: " + item)
			for item in arFile2:
				if item[ : 14 ] == "Generated on: ":
					pass
				elif item not in arFile1:
					print( "NEW: " + item)

	resultsFile.items = []
	resultsFile.sortedByNewest = []