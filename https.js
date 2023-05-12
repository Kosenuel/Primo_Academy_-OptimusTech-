/*   The HTTPS Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The HTTPS module makes nodejs/your code act as a HTTPS server.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The following example below will create a server that listens on port 8080 of your computer
and when port 8080 gets accessed, "Hello World!", is written back as a response.
*/

var https = require('https');

https.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World!");
    res.end();
}).listen(8080);

/*
Some other methods/functions that are present in the https module are;
createServer()      Creates an HTTPS server
get()               Sets the method to GET, and returns an object containing the user's request
globalAgent         Returns the HTTPS Agent
request             Makes a request to a secure web server



*/