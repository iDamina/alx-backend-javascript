#!/usr/bin/env node

/**
 * This script prompts the user for their name and outputs a greeting.
 * When the input ends, it outputs a closing message.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdin.pause(); // Stop reading input
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
