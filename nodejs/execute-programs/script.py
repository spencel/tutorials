import sys
import os

with open( r'C:/Users/slank/Documents/projects/epm-test0/arcgis/script.log', 'w' ) as file:
	#print( 'hello there' )
	file.write( 'hello there again 2' )
	
#print( 'script.py: super cool data' )
sys.stdout.write( 'test2' )
#sys.stdout.flush()