/*   The OS Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The OS module provides information about the operation/operating system.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The example below shows us how to get the information about the computer's operating system;
*/ 

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

/*
Some other methods/functions that are present in the OS module are;
arch()                  Returns the operating system CPU architecture.
constants               Returns an object containing the operating system's constants for process signals, error codes, etc..
cpus()                  Returns an array containing the information about the computer's CPUs.
endianness()            returns the endianness of the CPU

 

*/