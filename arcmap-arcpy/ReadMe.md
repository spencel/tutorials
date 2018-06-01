Contents

Section 1: Summary of py scripts
Section 2: Processes


Section 1: Summary of py scripts

add-grouplayer.py
Adds a group layer to the mxd. A group layer cannot be created alone and cannot be created by saving a feature class layer as a .lyr. A dummy group layer file must be used. I recommend putting a "do not delete.lyr" file in the same directory as the Default.gdb.

add-layer.py
Adds a layer from an sde databse, e.g., Atlas, to an mxd.
Or, Adds a layer from a gdb to an mxd.

apply-symbology.py (Work in progress)
Adds symbology to a feature class in layer.

atlas-pipe-material-export.py
Adds W_PIPE from atlas to ArcMap, exports it to gdb, adds that to ArcMap, exports individual pipe layers per pipe material with select fields and then adds these layers to ArcMap.

create-gdb.py
Creates a gdb with the same name and directory as the mxd.

export-pipe-materials.py
Saves individual feature class layers per pipe material from W_PIPE to a gdb.

featureclass-to-gdb.py
Exports a feature class layer to a gdb.

featureclass-to-kml.py (Work in progress)
Converts a feature class to a kml with custom script.

featureclass-to-kmz.py
Converts a feature class to a kmz (compressed kml archive).

filter-export-fields.py
Shows how to export select fields via FieldMappings class when using FeatureClassToFeatureClass_conversion.

get-layer-dictionary.py
Creates a dictionary containing the name of the mxd, its data frames, group layers, and layers.

get-layer-in-mxd.py
Gets a layer from a layer in the table of contents of an mxd.

list-sde-featureclasses.py
Lists the feature classes in an sde, which requires the * wild card character work around.

match-vertex.py
Check if a verex is shared with any geometry between two different layers.

sde-util-to-local-copy.py
Makes a copy of water system, wastewater system, storm water system, etc. on local machine.

sde-util-to-local-default-environment.py
Does the same as sde-util-to-local-copy.py however puts the data in gdb at the default directory (same directory as default.gdb) and names it "Local_"[sde name].gdb"

sde-watersys-to-local-copy.py
Makes a copy of water system layers in sde to the local machine.

select-features-by-attributes.py
Selects features from a feature class by attributes.


Section 2: Processes

1. sde-util-to-local-copy.py - Makes a copy of water system, wastewater system, storm water system, etc. on local machine.
2. make layers groups and symbology