/*   The Readline Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 Tis Readline module provides a way of reading a datastream, 
 one line at a time.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In the following example, we are going to see how we can 
open a file and return the content line by line;
*/

var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
    input: fs.createReadStream('demofile1.html')
});

var lineNo = 0;
myInterface.on('line', function(line){
    lineNo++;
    console.log("Line number " + lineNo + ': ' + line);
});
 
/*
Some other methods/functions that are present in the https module are;

clearLine()	        Clears the current line of the specified stream
clearScreenDown()	Clears the specified stream from the current cursor down position
createInterface()	Creates an Interface object
cursorTo()	        Moves the cursor to the specified position
emitKeypressEvents()	Fires keypress events for the specified stream
moveCursor()	    Moves the cursor to a new position, relative to the current position


*/