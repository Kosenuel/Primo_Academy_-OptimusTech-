/*   The Crypto Module

 ///////////////Description\\\\\\\\\\\\\\\\\\\\
 This module gives one the ability to handle
 OpenSSL cryptographic functions
////////////////___________\\\\\\\\\\\\\\\\\\\\\

Example:
The following code helps to encrypt the text "abc";
*/

var crypto = require( 'crypto' );

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr); // 34feb914cc099df25794bf9ccb85bea72


/*
Other method included in this module includes;

constants	            Returns an object containing Crypto Constants
fips	                Checks if a FIPS crypto provider is in use
createCipher()	        Creates a Cipher object using the specific algorithm and password
createCipheriv()    	Creates a Cipher object using the specific algorithm, password and initialization vector
createDecipher()    	Creates a Decipher object using the specific algorithm and password
createDecipheriv()	    Creates a Decipher object using the specific algorithm, password and initialization vector
createDiffieHellman()	Creates a DiffieHellman key exchange object
createECDH()	        Creates an Elliptic Curve Diffie Hellmann key exchange object
createHash()	        Creates a Hash object using the specified algorithm
createHmac()	        Creates a Hmac object using the specified algorithm and key
createSign()	        Creates a Sign object using the specified algorithm and key
createVerify()	        Creates a Verify object using the specified algorithm
getCiphers	            Returns an array of supported cipher algorithms
getCurves()	            Returns an array of supported elliptic curves
getDiffieHellman()  	Returns a predefined Diffie Hellman key exchange object
getHashes()	            Returns an array of supported hash algorithms
pbkdf2()	            Creates a Password Based Key Derivation Function 2 implementation
pbkdf2Sync()	        Creates a synchronous Password Based Key Derivation Function 2 implementation
privateDecrypt()	    Decrypts data using a private key
timingSafeEqual()	    Compare two Buffers and returns true is they are equal, otherwise false
privateEncrypt()	    Encrypts data using a private key
publicDecrypt()	        Decrypts data using a public key
publicEncrypt()	        Encrypts data using a public key
randomBytes()	        Creates random data
setEngine()	            Sets the engine for some or all OpenSSL function




*/