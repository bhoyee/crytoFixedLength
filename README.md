# crytoFixedLength
Generating short fixed length cryptographic hashes

## The Code do the following
1. Create a HEX digest using HMAC SHA-256 hash function
2. Take the first 3 characters of the digest
3. Convert them to an integer
4. If length < 4, concatenates one or multiples 0 at the end