/*   The Child Process Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module is used to spawn and communicate with
child processes. It allows you to run external commands 
or scripts as separate processes from your 
Node.js application and interact with them
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
*/

const { spawn } = require('child_process');

// To spawn a child process inorder to execute the "ls" command
const ls = spawn('ls', ['-lh', '/usr']);


/*
Some other methods that are available in the child_process module are;

spawn ()        This function spawns a new process and allows you to execute a command in a separate process.
exec()          This fuction runs a command in a shell and buffers the output for you to access
execFile()      This function runs an executable file with the given arguments, it is similar to the 'exec()' fuction, but it allows you to specify an executable file directly rather than running it through a shell
fork()          This function is specifically designed for creating new Node.js processes. It enables you to spawn a new Node.js process from your current Node.js process and communicate with it using inter-process communication(IPC).

*/