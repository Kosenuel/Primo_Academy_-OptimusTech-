/*   The URL Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The URL Module provides a way of parsing the URL 
 string
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we are going to parse the url string into a 
URL object and extract the href property;
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    var q = url.parse(req.url, true);
    res.write(q.href);
    res.end();
}).listen (8080);
 
/*
Some other methods/functions that are present in the URL module are;

url.format()	Returns a formatted URL string
url.parse()	    Returns a URL object
url.resolve()	Resolves a URL

*/