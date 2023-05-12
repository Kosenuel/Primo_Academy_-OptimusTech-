/*   The Event Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module gives your application the ablility to
 ability to handle events.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
we are going to make an event listener for an event, and then we
are going to provoke the event in the following code;
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmmiter.on('scream', function(){
    console.log('A scream is detected!');
});
eventEmitter.emit('scream');



/*
Other methods contained in the events module includes;

addListener()	            Adds the specified listener
defaultMaxListeners	Sets the maximum number of listeners allowed for one event. Default is 10
emit()	                    Call all the listeners registered with the specified name
eventNames()	            Returns an array containing all registered events
getMaxListeners()	        Returns the maximum number of listeners allowed for one event
listenerCount()         	Returns the number of listeners with the specified name
listeners()                                                             	Returns an array of listeners with the specified name
on()	                    Adds the specified listener
once()	                    Adds the specified listener once. When the specified listener has been executed, the listener is removed
prependListener()	        Adds the specified listener as the first event with the specified name
prependOnceListener()	    Adds the specified listener as the first event with the specified name, once. When the specified listener has been executed, the listener is removed
removeAllListeners()	    Removes all listeners with the specified name, or ALL listeners if no name is specified
removeListener()	        Removes the specified listener with the specified name
setMaxListeners()	        Sets the maximum number of listeners allowed for one event. Default is 10




*/