const rp = require( 'request-promise' );
const cheerio = require( 'cheerio' );

// assemble the esearch URL:
const base = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/`;
var db = `nucleotide`;
var retmode = `json`;
var term = `chimpanzee[orgn]+AND+biomol+mrna[prop]`;
var usehistory = `y`;
//var url = base + `esearch.fcgi?db=` + db + `&retmode=` + retmode + `&term=` + term + `&usehistory=` + usehistory;
var url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/einfo.fcgi?retmode=json`;

const options = {
	uri: url,
	transform: function ( body ) {
		return cheerio.load( body );
	}
};

//console.log( "test string".replace( "test", "\"" ));

rp( options )
	.then( ( htmlString ) => {
		console.log( 'request succeeded' );
		var x = htmlString( 'body' ).text();
		console.log( x );
		var y = JSON.parse( x );
		console.log( y.header );
	})
	.catch( ( error ) => {
		console.log( 'request failed' );
	});

