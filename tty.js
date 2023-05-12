/*   The TTY Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 The TTY module in Node.js provides the functionality
 for working with terminal devices, specifically with 
 TTY (teletypewriter) streams. TTY streams represent
 input/output devices that act as a terminal, such 
 as a command-line interface or a terminal emulator.
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
In this example, we first check if the standard input('stdin') is associated with a
TTY using the 'tty.isatty()'. The result is logged to the console.

Next we create a 'ReadStream' object 'inputStream' using the 'tty.ReadStream' 
constructor, passing in 'process.stdin' as the file descriptor.

We then set the TTY input to raw mode using the 'inputStream.setRawMode(true)'.
This allows us to receive input events for each character typed, without waiting for
newline characters.

Finally, we listen for the 'data' event on the 'inputStream'. Whenever input is received, 
we check if the input is the letter 'q', if it is, we exit the program. Otherwise, we log 
the received input to the console.
*/


const tty = require('tty');

if (tty.isatty(process.stdin.fd)){
    console.log('stdin is a TTY');
}else{
    console.log('stdin is not a TTY');
}

const inputStream = new tty.ReadStream(process.stdin);
inputStream.setRawMode(true);

inputStream.on('data', (data) => {
    if (data.toString() === 'q'){
        process.exit();
    }
    console.log('Received input: ${data.toString()}');
});

/*
Some other methods/functions that are present in the TTY module are;
tp
tty.isatty(fd): Checks whether the given file descriptor (fd) refers to a TTY. It returns true if the file descriptor is associated with a TTY, and false otherwise.

tty.ReadStream: A class that represents a readable TTY stream. It inherits from the Readable stream class and provides additional methods and events specific to TTY input.

tty.WriteStream: A class that represents a writable TTY stream. It inherits from the Writable stream class and provides additional methods and events specific to TTY output.

tty.ReadStream.prototype.isRaw: A property indicating whether the TTY input is in raw mode. When in raw mode, input events are emitted for every character typed, rather than waiting for newline characters.

tty.ReadStream.prototype.setRawMode(mode): A method that enables or disables raw mode for the TTY input. When raw mode is enabled, input events are emitted for each character without buffering.


*/