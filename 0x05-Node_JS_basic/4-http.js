#!/usr/bin/env node

const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200: OK
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text
  res.end('Hello Holberton School!'); // Respond with the message
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
