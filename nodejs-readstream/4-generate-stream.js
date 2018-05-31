var crypto = require('crypto');
var stream = require('stream');
var util = require('util');

var Readable = stream.Readable;

function RandomStream (length, options) {
  // allow calling with or without new
  if (!(this instanceof RandomStream)) {
    return new RandomStream(length, options);
  }

  // init Readable
  stream.Readable.call(this, options);

  // save the length to generate
  this.lenToGenerate = length;
}
util.inherits(RandomStream, stream.Readable);

RandomStream.prototype._read = function (size) {
  if (!size) size = 1024; // default size
  var ready = true;
  while (ready) { // only cont while push returns true
    if (size > this.lenToGenerate) { // only this left
      size = this.lenToGenerate;
    }
    if (size) {
      ready = this.push(crypto.randomBytes(size));
      this.lenToGenerate -= size;
    }

    // when done, push null and exit loop
    if (!this.lenToGenerate) {
      this.push(null);
      ready = false;
    }
  }
};


// now use our RandomStream and compute digest of it
var readStream = new RandomStream(204800);
var hash = crypto.createHash('sha1');
readStream
  .on('readable', function () {
    var chunk;
    while (null !== (chunk = readStream.read())) {
      console.log('chunk: ', chunk);
      hash.update(chunk);
    }
  })
  .on('end', function () {
    console.log('digest: ', hash.digest('hex'));
  });