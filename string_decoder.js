/*   The StringDecoder Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The String_Decoder Module provides a way of 
 decoding Buffer objects into strings.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we will decode a stream of binary data
(a buffer object) into a string.
*/

var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');

console.log(b); // write buffer
console.log(d.write(b)); // write decoded buffer;

/*
Some other methods/functions that are present in the String_decoder module are;

end()	Returns what remains of the input stored in the internal buffer
write()	Returns the specified buffer as a string

*/