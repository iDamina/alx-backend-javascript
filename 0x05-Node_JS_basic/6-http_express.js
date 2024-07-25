#!/usr/bin/env node

const express = require('express');

// Create an Express application
const app = express();

// Define the / route handler
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
