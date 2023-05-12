/*   The VM Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module provides a way of executing Javascript
 on a virtual machine, almost like eval() in Javascript
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The following example would run some Javascript code in a 
"Virtual Machine";

var vm = require('vm');
var myObj = { name: "John doe", age: 18};
vm.createContext(myObj);

vm.runInContext('age += 1;', myObj);

console.log(myObj);

Some other methods/functions that are present in the https module are;

createContext()	Prepares a virtual machine, or sandbox, where you can execute scripts
isContext()	    Returns true if the specified sandbox has been created by the createContext() method
runInContext()	Executes JavaScript code in the specified context, and returns the result
runInDebug()	Executes JavaScript inside the debug context
runInNewContext()	Executes JavaScript code in a new context, and returns the result
runInThisContext()	Executes JavaScript code in the global context, and returns the result

*/