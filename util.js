/*   The UTIL Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The Util module provides access to some of the 
 utility functions.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we are going to format a string using 
the arguments "Linus" and "6";
*/


var util = require('util');
var txt = "Congratulate %s on his %dth birthday!'"
var result = util.format(txt, 'Linus', 6);

console.log(result);

/*
Some other methods/functions that are present in the UTIL module are;

debuglog()	Writes debug messages to the error object
deprecate()	Marks the specified function as deprecated
format()	Formats the specified string, using the specified arguments
inherits()	Inherits methods from one function into another
inspect()	Inspects the specified object and returns the object as a string

*/