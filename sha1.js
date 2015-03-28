/*
 * A nodejs implementation of sha256
 * Modified from https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm
 */
var filename = process.argv[2];
var crypto = require('crypto');
var fs = require('fs');

var shasum = crypto.createHash('sha256');

var s = fs.ReadStream(filename);
var da;
s.on('data', function(d) {
    console.log("updating");
  shasum.update(d);
  da =d.toString();

});

s.on('end', function(data) {
  var d = shasum.digest('hex');
  console.log(da);
  console.log(d + '  ' + filename);
});
