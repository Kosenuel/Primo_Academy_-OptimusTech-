/*   The TLS Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The TLS module provides a way of implementing 
 TLS (Transport Layer Security)  and 
 SSL (Secure Socket Layer).
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
in this example, we create a secure server that listens for incoming
connections over SSL/TLS:
*/

const fs = require('fs');
const https = require('https');
const tls = require('tls');

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
}); 

server.listen(443, ()=>{
    console.log('Server is listening on port: 443');
});


/*
Some other methods/functions that are present in the TLS module are;

connect()	            Returns a Socket object
createSecureContext()	Creates an object containing security details
createServer()      	Creates a Server object
getCiphers()	        Returns an array containing the supported SSL ciphers

*/