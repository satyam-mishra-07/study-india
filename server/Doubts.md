# Notes

## Node.js process.exit()

`process.exit(0)` in Node.js is used to terminate the current process. The number passed to `exit` is a status code, with `0` indicating successful completion.

## Mongoose Middleware

Mongoose middleware functions, specifically pre-save hooks, are functions that run before a document is saved to the MongoDB database.

## Password Hashing

Hashing passwords before storing them in the database is important for security. If a password hasn't been modified, it's unnecessary to hash it again.

## Bcrypt Library

The `bcrypt` library is used for generating salts and hashing passwords in Node.js.

## JWT Signature

The JWT signature should be a string, typically a secret key used to sign the token.

## Mongoose Instance Methods

Instance methods in Mongoose are methods that can be called on individual documents. The `passwordCompare` method is used to compare a plain text password with a hashed password.

## Mongoose Model Instances

An instance of a model in Mongoose represents a document that can be saved and retrieved from the database.