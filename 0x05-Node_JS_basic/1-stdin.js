process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });
} else {
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
