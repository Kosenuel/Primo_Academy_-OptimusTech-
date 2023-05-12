/*   The Assert Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module helps in the creation of servers and clients (TCP)
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In the example below, we Import the "net" module using the 'require()
function. and after that we create a TCP server using the 
'net.createServer()' function. Inside the server's callback function, 
we handle incoming connections using the 'socket' object.
*/
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        socket.write(data);
    });
});
 
socket.on('end', ()=>{
    console.log("Client disconnected");
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});

/*
Some other methods/functions that are present in the NET module are;

connect()           Creates a new connection to the server, and returns a new Socket.
createConnection()  Creates a new connection to the server, and returns a new Socket.
createServer()      Creates a new server
isIP                Checks if the specified value is an IP address
isIPv4              Checks if the specified value is an IPv4 address
isIPv6              Checks if the specicified value is an IPv6 address

*/