Provides a list of the names of all valid Entrez databases

example url: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/einfo.fcgi?retmode=json&db=protein

results:
{
    "header": {
        "type": "einfo",
        "version": "0.3"
    },
    "einforesult": {
        "dbinfo": {
            "dbname": "protein",
            "menuname": "Protein",
            "description": "Protein sequence record",
            "dbbuild": "Build180417-0236m.1",
            "count": "500503387",
            "lastupdate": "2018/04/18 09:59",
            "fieldlist": [
                {
                    "name": "ALL",
                    "fullname": "All Fields",
                    "description": "All terms from all searchable fields",
                    "termcount": "2652117871",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "N",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "UID",
                    "fullname": "UID",
                    "description": "Unique number assigned to each sequence",
                    "termcount": "0",
                    "isdate": "N",
                    "isnumerical": "Y",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "Y"
                },
                {
                    "name": "FILT",
                    "fullname": "Filter",
                    "description": "Limits the records",
                    "termcount": "236",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "WORD",
                    "fullname": "Text Word",
                    "description": "Free text associated with record",
                    "termcount": "717226693",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "N",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "TITL",
                    "fullname": "Title",
                    "description": "Words in definition line",
                    "termcount": "90685744",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "N",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "KYWD",
                    "fullname": "Keyword",
                    "description": "Nonstandardized terms provided by submitter",
                    "termcount": "32356",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "AUTH",
                    "fullname": "Author",
                    "description": "Author(s) of publication",
                    "termcount": "2595163",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "JOUR",
                    "fullname": "Journal",
                    "description": "Journal abbreviation of publication",
                    "termcount": "84784",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "VOL",
                    "fullname": "Volume",
                    "description": "Volume number of publication",
                    "termcount": "4364",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "ISS",
                    "fullname": "Issue",
                    "description": "Issue number of publication",
                    "termcount": "4332",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PAGE",
                    "fullname": "Page Number",
                    "description": "Page number(s) of publication",
                    "termcount": "196806",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "ORGN",
                    "fullname": "Organism",
                    "description": "Scientific and common names of organism, and all higher levels of taxonomy",
                    "termcount": "2666535",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "Y",
                    "ishidden": "N"
                },
                {
                    "name": "ACCN",
                    "fullname": "Accession",
                    "description": "Accession number of sequence",
                    "termcount": "1002419241",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PACC",
                    "fullname": "Primary Accession",
                    "description": "Does not include retired secondary accessions",
                    "termcount": "1000957810",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "GENE",
                    "fullname": "Gene Name",
                    "description": "Name of gene associated with sequence",
                    "termcount": "741580039",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PROT",
                    "fullname": "Protein Name",
                    "description": "Name of protein associated with sequence",
                    "termcount": "5862218",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "ECNO",
                    "fullname": "EC/RN Number",
                    "description": "EC number for enzyme or CAS registry number",
                    "termcount": "5744",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PDAT",
                    "fullname": "Publication Date",
                    "description": "Date sequence added to GenBank",
                    "termcount": "10810",
                    "isdate": "Y",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "MDAT",
                    "fullname": "Modification Date",
                    "description": "Date of last update",
                    "termcount": "5889",
                    "isdate": "Y",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "SUBS",
                    "fullname": "Substance Name",
                    "description": "CAS chemical name or MEDLINE Substance Name",
                    "termcount": "650478",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PROP",
                    "fullname": "Properties",
                    "description": "Classification by source qualifiers and molecule type",
                    "termcount": "100680",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "SQID",
                    "fullname": "SeqID String",
                    "description": "String identifier for sequence",
                    "termcount": "362544252",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "GPRJ",
                    "fullname": "BioProject",
                    "description": "BioProject",
                    "termcount": "123024",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "Y",
                    "ishidden": "N"
                },
                {
                    "name": "SLEN",
                    "fullname": "Sequence Length",
                    "description": "Length of sequence",
                    "termcount": "13418",
                    "isdate": "N",
                    "isnumerical": "Y",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "MLWT",
                    "fullname": "Molecular Weight",
                    "description": "Molecular Weight",
                    "termcount": "499974",
                    "isdate": "N",
                    "isnumerical": "Y",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "FKEY",
                    "fullname": "Feature key",
                    "description": "Feature annotated on sequence",
                    "termcount": "32",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "PORG",
                    "fullname": "Primary Organism",
                    "description": "Scientific and common names of primary organism, and all higher levels of taxonomy",
                    "termcount": "2658651",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "Y",
                    "ishidden": "N"
                },
                {
                    "name": "ASSM",
                    "fullname": "Assembly",
                    "description": "Assembly",
                    "termcount": "181",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "DIV",
                    "fullname": "Division",
                    "description": "Division",
                    "termcount": "13",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "STRN",
                    "fullname": "Strain",
                    "description": "Strain",
                    "termcount": "759461",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "ISOL",
                    "fullname": "Isolate",
                    "description": "Isolate",
                    "termcount": "2224238",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "CULT",
                    "fullname": "Cultivar",
                    "description": "Cultivar",
                    "termcount": "21242",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                },
                {
                    "name": "BRD",
                    "fullname": "Breed",
                    "description": "Breed",
                    "termcount": "3093",
                    "isdate": "N",
                    "isnumerical": "N",
                    "singletoken": "Y",
                    "hierarchy": "N",
                    "ishidden": "N"
                }
            ],
            "linklist": [
                {
                    "name": "nuccore_protein_wp",
                    "menu": "Links to autonomous proteins",
                    "description": "Autonomous protein records",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_biocollections",
                    "menu": "BioCollections",
                    "description": "BioCollections",
                    "dbto": "biocollections"
                },
                {
                    "name": "protein_bioproject",
                    "menu": "BioProject Links",
                    "description": "Proteins related to BioProjects",
                    "dbto": "bioproject"
                },
                {
                    "name": "protein_biosystems",
                    "menu": "BioSystem Links",
                    "description": "BioSystems",
                    "dbto": "biosystems"
                },
                {
                    "name": "protein_ccds",
                    "menu": "ccds",
                    "description": "Link to Consensus CDS",
                    "dbto": "ccds"
                },
                {
                    "name": "protein_cdd",
                    "menu": "Conserved Domain Links",
                    "description": "Link to conserved domains within a protein",
                    "dbto": "cdd"
                },
                {
                    "name": "protein_cdd_concise_2",
                    "menu": "Concise Conserved Domain Links",
                    "description": "Link to a concise list of conserved domains in a protein",
                    "dbto": "cdd"
                },
                {
                    "name": "protein_cdd_seqr",
                    "menu": "Proteins with Similar Sequences",
                    "description": "Similar protein sequences, using SEQR",
                    "dbto": "cdd"
                },
                {
                    "name": "protein_cdd_summary",
                    "menu": "",
                    "description": "Display conserved domains within a protein",
                    "dbto": "cdd"
                },
                {
                    "name": "protein_gene",
                    "menu": "Gene Links",
                    "description": "Link to related Genes",
                    "dbto": "gene"
                },
                {
                    "name": "protein_genome",
                    "menu": "Genome Links",
                    "description": "Genome record encoding protein sequence",
                    "dbto": "genome"
                },
                {
                    "name": "protein_homologene",
                    "menu": "HomoloGene Links",
                    "description": "Related HomoloGene",
                    "dbto": "homologene"
                },
                {
                    "name": "protein_mapview",
                    "menu": "",
                    "description": "Display in Chromosome Map Viewer",
                    "dbto": "mapview"
                },
                {
                    "name": "protein_nuccore",
                    "menu": "Nucleotide Links",
                    "description": "Nucleotide sequence from coding region",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_mat_peptide",
                    "menu": "Mature Peptides",
                    "description": "Link between nucleotide record and mature peptides contained within nucleotide record",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_mgc",
                    "menu": "Nucleotide NIH cDNA clone links",
                    "description": "Nucleotide NIH cDNA clone",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_mrna",
                    "menu": "Encoding mRNA",
                    "description": "Link from protein to encoding mRNA",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_small_genome",
                    "menu": "Link to all nucleotide sequences from this genome",
                    "description": "All nucleotide sequences from this genome",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_tsa",
                    "menu": "TSA master records",
                    "description": "Links to TSA master records",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_wgs",
                    "menu": "",
                    "description": "Links to WGS master sequences",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nuccore_wp",
                    "menu": "Link to genomic records",
                    "description": "Genomic records",
                    "dbto": "nuccore"
                },
                {
                    "name": "protein_nucgss",
                    "menu": "GSS Links",
                    "description": "GSS sequence from coding region",
                    "dbto": "nucgss"
                },
                {
                    "name": "protein_nucleotide_mgc_url",
                    "menu": "",
                    "description": "Order cDNA clone",
                    "dbto": "nucleotide"
                },
                {
                    "name": "protein_omim",
                    "menu": "OMIM Links",
                    "description": "OMIM records associated with protein sequence",
                    "dbto": "omim"
                },
                {
                    "name": "protein_pcassay_target",
                    "menu": "BioAssay by Target (List)",
                    "description": "PubChem BioAssays done on the protein target",
                    "dbto": "pcassay"
                },
                {
                    "name": "protein_pcassay_target_pig",
                    "menu": "BioAssay by Target (Identical Proteins, List)",
                    "description": "PubChem BioAssays done on the protein target PIG",
                    "dbto": "pcassay"
                },
                {
                    "name": "protein_pcassay_target_pig_summary",
                    "menu": "pcassay",
                    "description": "BioAssay by Target (Identical Proteins, Summary)",
                    "dbto": "pcassay"
                },
                {
                    "name": "protein_pcassay_target_summary",
                    "menu": "pcassay",
                    "description": "BioAssay by Target (Summary)",
                    "dbto": "pcassay"
                },
                {
                    "name": "protein_pccompound",
                    "menu": "PubChem Compound Links",
                    "description": "Related PubChem Compound",
                    "dbto": "pccompound"
                },
                {
                    "name": "protein_pcsubstance",
                    "menu": "PubChem Substance Links",
                    "description": "Related PubChem Substance",
                    "dbto": "pcsubstance"
                },
                {
                    "name": "protein_pmc",
                    "menu": "PMC Links",
                    "description": "Free full text articles in PMC",
                    "dbto": "pmc"
                },
                {
                    "name": "protein_popset",
                    "menu": "PopSet Links",
                    "description": "Population set containing protein sequence",
                    "dbto": "popset"
                },
                {
                    "name": "protein_protein",
                    "menu": "Related Sequences",
                    "description": "Similar protein sequences, using BLASTP",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_cdart_summary",
                    "menu": "",
                    "description": "Display proteins with similar conserved domain architecture",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_ref2wp",
                    "menu": "Links from references to autonomous proteins",
                    "description": "Autonomous protein records",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_refseq2uniprot",
                    "menu": "Protein (UniProtKB)",
                    "description": "Protein gi (refseq) to protein gi (UniProtKB)",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_small_genome",
                    "menu": "Link to all proteins from this genome",
                    "description": "All proteins from this genome",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_uniprot2refseq",
                    "menu": "Protein (RefSeq)",
                    "description": "Protein gi (UniProtKB) to protein gi (refseq)",
                    "dbto": "protein"
                },
                {
                    "name": "protein_protein_wp2ref",
                    "menu": "Link to referencing proteins",
                    "description": "Referencing proteins",
                    "dbto": "protein"
                },
                {
                    "name": "protein_proteinclusters",
                    "menu": "Protein Cluster Links",
                    "description": "Related Protein Clusters",
                    "dbto": "proteinclusters"
                },
                {
                    "name": "protein_pubmed",
                    "menu": "PubMed Links",
                    "description": "PubMed articles cited by protein sequence record",
                    "dbto": "pubmed"
                },
                {
                    "name": "protein_pubmed_refseq",
                    "menu": "PubMed (RefSeq) Links",
                    "description": "Link to RefSeq PubMed articles",
                    "dbto": "pubmed"
                },
                {
                    "name": "protein_pubmed_weighted",
                    "menu": "PubMed (Weighted) Links",
                    "description": "Links to pubmed",
                    "dbto": "pubmed"
                },
                {
                    "name": "protein_snp",
                    "menu": "SNP Links",
                    "description": "Related SNPs",
                    "dbto": "snp"
                },
                {
                    "name": "protein_snp_geneview",
                    "menu": "",
                    "description": "SNPs linked from GeneView",
                    "dbto": "snp"
                },
                {
                    "name": "protein_structure",
                    "menu": "Identical Structures",
                    "description": "3D structures for identical protein sequences",
                    "dbto": "structure"
                },
                {
                    "name": "protein_structure_direct",
                    "menu": "Structures",
                    "description": "Experimentally determined 3D Structures",
                    "dbto": "structure"
                },
                {
                    "name": "protein_structure_related",
                    "menu": "",
                    "description": "Related structures",
                    "dbto": "structure"
                },
                {
                    "name": "protein_structure_related_list",
                    "menu": "Related Structures (List)",
                    "description": "List of related structures",
                    "dbto": "structure"
                },
                {
                    "name": "protein_taxonomy",
                    "menu": "Taxonomy Links",
                    "description": "Taxonomy sequences associated with protein record",
                    "dbto": "taxonomy"
                },
                {
                    "name": "protein_taxonomy_wp2species",
                    "menu": "Links from autonomous proteins to species level organisms",
                    "description": "Species level organisms",
                    "dbto": "taxonomy"
                },
                {
                    "name": "protein_unigene",
                    "menu": "UniGene Links",
                    "description": "Related UniGene records",
                    "dbto": "unigene"
                }
            ]
        }
    }
}


source: https://www.ncbi.nlm.nih.gov/books/NBK25499/#chapter4.EInfo