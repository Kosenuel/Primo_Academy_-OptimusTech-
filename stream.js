/*   The Stream Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The Stream Module provides the capability of 
 handling streaming data
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we write to a writeable stream.
*/

var http = require('http');

http.createServer(function(req, res){
    res.WriteHeadd(200, {'Content-Type' : 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);


/*
Some other methods/functions that are present in the Stream module are;

Readable Stream Properties and Methods

    isPaused()	Returns true if the state of  the readable stream is paused, otherwise false
    pause()	    Pauses the readable stream
    pipe()	    Turns the readable stream into the specified writable stream
    read()	    Returns a specified part of the readable stream
    resume()	Resumes a paused stream
    setEncoding()	Sets the character encoding of the readable stream
    unpipe()	    Stops turning a readable stream into a writable stream, caused by the pipe() method
    unshift()	    Pushes some specified data back into the internal buffer
    wrap()	        Helps reading streams made by older Node.js versions

Writable Stream Properties and Methods

    cork()	Stops the writable stream and all written data will be buffered in memory
    end()	Ends the writable stream
    setDefaultEncoding()	Sets the encoding for the writable stream
    uncork()	            Flushes all data that has been buffered since the cork() method was called
    write()	                Writes data to the stream

*/