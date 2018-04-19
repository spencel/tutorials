const rp = require( 'request-promise' );
const cheerio = require( 'cheerio' );

// assemble the esearch URL:
const base = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/`;
var db = `nucleotide`;
var retmode = `json`;
var term = `chimpanzee[orgn]+AND+biomol+mrna[prop]`;
var usehistory = `y`;
var url = base + `esearch.fcgi?db=` + db + `&retmode=` + retmode + `&term=` + term + `&usehistory=` + usehistory;

const options = {
	uri: url,
	transform: function ( body ) {
		return cheerio.load( body );
	}
};

rp( options )
	.then( ( data ) => {
		console.log( 'request succeeded' );
		console.log( 'data:\n' + data( 'html' ) );
	})
	.catch( ( error ) => {
		console.log( 'request failed' );
	});