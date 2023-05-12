/*   The Assert Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module provides a set of assertion tests
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example: 
To include the assert module in your application, follow the syntax below;
*/

var assert = require('assert');

assert(5 > 7);


/*
The above expression terminates the program if it evaluatess to 0 or false.

some methods available in this module are;

assert()	          Checks if a value is true. Same as assert.ok()
deepEqual()	          Checks if two values are equal
deepStrictEqual()     Checks if two values are equal, using the strict equal operator (===)
equal()	              Checks if two values are equal, using the equal operator (==)
fail()                Throws an Assertion Error
ifError()	          Throws a specified error if the specified error evaluates to true
notDeepEqual()        Checks if two values are not equal
notDeepStrictEqual()  Checks if two values are not equal, using the strict not equal operator (!==)
notEqual()	          Checks if two values are not equal, using the not equal operator (!=)
notStrictEqual()	  Checks if two values are not equal, using the strict not equal operator (!==)
ok()	              Checks if a value is true
strictEqual()	      Checks if two values are equal, using the strict equal operator (===)
	 
etc...

*/