gimbus.js
=========

A small library providing utility methods to `shorten` and `unshorten` URLs using [http://gimb.us/'s](http://gimb.us/) API.

## Installation

  npm install gimbus --save

## Usage

  `var gimbus = require('gimbus');
  var url = "http://ashley.re";
  gimbus.shorten(url);  // if no callback is specified, it'll use console.log as a callback
  gimbus.shorten(url,function(short_url) {
  	console.log("Shortened URL is:",short_url);
  	gimbus.unshorten(short_url,function(url) {
  		console.log(short_url,"points to",url);
  	})
  });`

  `~$ node test.js 
  http://gimb.us/VHCL1
  Shortened URL is: http://gimb.us/VHCL1
  http://gimb.us/VHCL1 points to http://ashley.re`

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release