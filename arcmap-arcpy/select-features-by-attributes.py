import arcpy

featureClassName = "SDW.CITY.W_PIPE"
selectionType = "NEW_SELECTION"
sqlQuery = "FAC_NAME = 'ALVARADO 1ST PIPELINE'"
arcpy.SelectLayerByAttribute_management( featureClassName, selectionType, sqlQuery )