/*   The QueryString Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The Querystring module provides the ability to handle 
 URL query for strings
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In the following example, a query string is being parsed to
an object and the year property is extracted
*/

var querystring = require('querystring');
var q = querystring.parse('year=2023&month=may');
console.log(q.year)

/*
Some other methods/functions that are present in the https module are;

escape()	Returns an escaped querystring
parse()	    Parses the querystring and returns an object
stringify()	Stringifies an object, and returns a query string
unescape()	Returns an unescaped query string

*/