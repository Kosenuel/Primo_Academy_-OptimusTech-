/*   The Assert Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module gives you the ability to split a 
 single Node process into multiple processes. 
 It provides a way of creating child processes 
 that runs simultaneously and share the same 
 server port.
 ////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The following code runs three times, the first time is as a master, then as workers;
*/

var cluster = require('cluster');

if(cluster.isWorker){
    console.log('I am a worker');
} else {
    console.log('I am a master');
    cluster.fork();
    cluster.fork();
}
 


/*

Other methods available in this module includes;

disconnect()        	Disconnects all workers
exitedAfterDisconnect	Returns true if a worker was exited after disconnect, or the kill method
fork()	                Creates a new worker, from a master
id	                    A unique id for a worker
isConnected	            Returns true if the worker is connected to its master, otherwise false
isDead	                Returns true if the worker's process is dead, otherwise false
isMaster	            Returns true if the current process is master, otherwise false
isWorker	            Returns true if the current process is worker, otherwise false
kill()	                Kills the current worker
process	                Returns the global Child Process
schedulingPolicy    	Sets or gets the schedulingPolicy
send()	                sends a message to a master or a worker
settings	            Returns an object containing the cluster's settings
setupMaster()	        Changes the settings of a cluster
worker	                Returns the current worker object
workers	                Returns all workers of a master

*/