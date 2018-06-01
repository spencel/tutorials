# Remove leading zeros from folder names

import os, sys



root = "Y:\EPM\CondAssess\Improvement Drawings\By No"
for fileDir in os.listdir( root ):
	if os.path.isdir( os.path.join( root, fileDir) ):
		oldDirectoryName = fileDir
		newDirectoryName = oldDirectoryName
		renameDirectory = False
		for i in range(0,10):
			if newDirectoryName[0] == '0':
				newDirectoryName = newDirectoryName[1:]
				renameDirectory = True
				#print(newDirectoryName)
			else:
				if renameDirectory == True:
					print( os.path.join( root, newDirectoryName ) )
					os.rename( 
						src = os.path.join( root, oldDirectoryName ),
						dst = os.path.join( root, newDirectoryName )
					 )
					renameDirectory = False
				break