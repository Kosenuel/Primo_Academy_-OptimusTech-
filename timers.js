/*   The Timers Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The Timers Module provides the ability of 
 scheduling function to be called later or at a given
 time. The Timer object is a global object in Node.js, and it is not necessary to 
 import it using the require keyword.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we are going to write "Hello" every 500 milliseconds.
*/

var myInt = setInterval(function (){
    console.log("Hello");
}, 500);

/*
Some other methods/functions that are present in the Timers module are;
 
clearImmediate()	Cancels an Immediate object
clearInterval()	Cancels an Interval object
clearTimeout()	Cancels a Timeout object
ref()	        Makes the Timeout object active. Will only have an effect if the Timeout.unref() method has been called to make the Timeout object inactive.
setImmediate()	Executes a given function immediately.
setInterval()	Executes a given function at every given milliseconds
setTimeout()	Executes a given function after a given time (in milliseconds)
unref()	        Stops the Timeout object from remaining active.

*/