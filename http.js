/*   The HTTP Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
The http module provides the ability to make 
Node.js act as a HTTP server,inorder to transfer and
receive data over HTTP.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
to create a server that listens on port 8080, do;
*/
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World!");
    res.end();

}).listen(8080);
 
/*
Other methods included in the HTTP Module lncludes;

createClient()	Deprecated. Creates a HTTP client
createServer()	Creates an HTTP server
get()       	Sets the method to GET, and returns an object containing the user's request
globalAgent	    Returns the HTTP Agent
request()	    Returns an object containing the user's request


*/