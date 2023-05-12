/*   The Punycode Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The punycode mosule in Nodejs provides 
 functionality for encoding and decoding punycode 
 strings. Punycode is a method of representing 
 Unicode strings with limited ASCII characters
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In the example below, the punycode.toASCII() function converts
the Unicode name "點看" to it's punycode representation "xn--c1yn36f",
conversely, the 'punycode.toUnicode()' function converts the punycode name
back to its Unicode representation.
*/

const punycode = require('punycode');

const domain = '點看';
const punycodeName = punycode.toASCII(domain);
console.log(punycodeName); // xn--c1yn36f

const unicodeName= punycode.toUnicode(punycodeName);
console.log(unicodeName); // 點看

/*
Some other methods/functions that are present in the Punycode module are;

punycode.decode(string): Decodes a Punycode string and returns the corresponding Unicode string.

punycode.encode(string): Encodes a Unicode string and returns the corresponding Punycode string.

punycode.toASCII(domain): Converts a Unicode domain name to its Punycode representation.

punycode.toUnicode(domain): Converts a Punycode domain name to its Unicode representation.

punycode.ucs2.decode(string): Decodes a string of UCS-2 encoded code points into an array of code points.

punycode.ucs2.encode(codePoints): Encodes an array of code points into a string of UCS-2 encoded code points.

punycode.version: A string representing the version of the Punycode implementation used by the module.

*/