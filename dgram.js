/*   The Dgram Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The dgram module provides the implementation 
 of UDP datagram sockets
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The following code illustrates how to make a 
file (say "demo_gram.js") that listens for 
messages on port 8080
*/

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function (msg, rinfo) {
    console.log('I got this message ' +msg.toString() ) 
})
 
s.bind(8080)



/*
Other functions and methods for the d-gram module is;

CreateSocket();     Creates a socket object


*/