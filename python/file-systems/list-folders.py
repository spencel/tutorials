# List all files and subdirectories in a directory but not in those subdirectories

import os, sys



path = "Y:\EPM\CondAssess\Water Pipelines\Bonita"
filesDirs = os.listdir( path )

print(filesDirs)