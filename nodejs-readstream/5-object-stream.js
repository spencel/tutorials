var Readable = require( 'stream' ).Readable;
var util = require( 'util' );

var myObjects = [
  { some: 'body' },
  { any: 'body' }
]

function CountingObjectStream(objects, options) {
  if ( !( this instanceof CountingObjectStream ) ) {
    return new CountingObjectStream( objects, options );
  }
  if ( !options ) options = {}; // ensure object
  options.objectMode = true; // forcing object mode
  Readable.call(this, options);
  this.lenToCount = objects.length; // how far to count
  this.index = 0; // track our count
  this.objects = objects;
}

util.inherits(CountingObjectStream, Readable);

CountingObjectStream.prototype._read = function() {
  this.index += 1;
  if (this.index > this.lenToCount) {
    return this.push(null); //done, return
  }
  // pushing number, but could be any non-null obj
  this.push(this.objects[this.index - 1]);
};

// consume this stream and output to stdout
// coercing it to a string
var readStream = new CountingObjectStream(myObjects);
readStream
  .on('readable', () => {
    var obj;
    while (null !== (obj = readStream.read())) {
      console.log(obj);
    }
  });