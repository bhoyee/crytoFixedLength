/** My implementation to generate  4 digits code

1. Create a HEX digest using HMAC SHA-256 hash function
2. Take the first 3 characters of the digest
3. Convert them to an integer
4. If length < 4, concatenates one or multiples 0 at the end
**/
const crypto = require('crypto');
let fName = "Salsiui",
    lName = "Adeboya",
    phone = "982347058849234";
    
const secret = `${fName}${lName}${phone}`;
const hash = crypto.createHmac('sha256', secret)
             .update('This is just for a test')
             .digest('hex');

const first4HexCharacters = hash.slice(0, 4); // get first 4 HexChracters
const convertTOInt = parseInt(first4HexCharacters, 16) % 10000;
             
let code = convertTOInt.toString();
            code = Array(4 - code.length)
                        .fill(0)
                        .join('') + code;

                
console.log(hash);
console.log(code);
