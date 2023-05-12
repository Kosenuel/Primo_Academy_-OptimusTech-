/*   The Domain Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The Domain module provedes a way to handle uncaught
 exceptions that occur within an asynchronous code. 
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
*/

const domain = require('domain');

const myDomain = domain.create();
myDomain.on('error', (err)=>{
    console.error('Unhandled error: ', err);
});
 
/*
Other methods available in the "domain" module (though deprecated) include:

domain.run(fn): Executes the provided function within the domain.
domain.bind(callback): Returns a wrapped version of the provided callback that runs within the domain.
domain.intercept(callback): Returns a wrapped version of the provided callback that runs within the domain, similar to domain.bind(), but also intercepts errors that occur in asynchronous callbacks.
domain.enter(): Explicitly enters the domain. This method is called automatically when using domain.run().
domain.exit(): Explicitly exits the domain.

*/