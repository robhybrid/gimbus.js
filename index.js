var request = require('request');
function shorten(url,callback) {
	var callback = typeof callback !== 'undefined' ? callback : console.log;
	request(
		{
			uri: "http://gimb.us/",
			method: "GET",
			qs: {
				url: url
			}
		},
		
		function(error, response, body) {
			callback("http://gimb.us/"+body)
		}
	);
}

function unshorten(url,callback) {
	var callback = typeof callback !== 'undefined' ? callback : console.log
	request(
		{
			uri: url,
			method: "HEAD",
			followRedirect: false
		},
		
		function(error, response, body) {
			var loc = response.headers['location']
			if(loc == undefined) loc = url
			callback(url)
		}
	);
}

module.exports.shorten=shorten;
module.exports.unshorten=unshorten;
