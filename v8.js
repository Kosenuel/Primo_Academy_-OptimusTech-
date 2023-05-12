/*   The Assert Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The v8 module provides access to the underlying V8 
 Javascript engine's. API. V8 is the Javascript engine 
 that is responsible for executing Javascript code on many
 clients bweb browser
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
in this example, we are going to retrieve heap statistics usin gthe v8.getHeapStatistics();
*/
const v8 = require('v8');

const heapStatistics = v8.getHeapStatistics();
console.log(heapStatistics);


/*
Some other methods/functions that are present in the V8 module are;
 
v8.getHeapStatistics(): Returns an object with information about the current memory usage and heap statistics of the V8 engine.

v8.getHeapSpaceStatistics(): Returns an array of objects containing information about each space in the V8 heap.

v8.getHeapCodeStatistics(): Returns an object with information about code statistics, such as the number of compiled and executable functions.

v8.getHeapSnapshot(): Generates a snapshot of the current V8 heap. The snapshot can be used for memory analysis and debugging purposes.

v8.cachedDataVersionTag(): Returns the version tag string for the current V8 cached data format.

*/