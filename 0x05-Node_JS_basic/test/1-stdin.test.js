const { spawn } = require('child_process');

test('stdin program interaction', (done) => {
  const process = spawn('node', ['1-stdin.js']);

  let output = '';
  process.stdout.on('data', (data) => {
    output += data.toString();
  });

  process.stdin.write('Bob\n');
  process.stdin.end();

  process.on('close', () => {
    expect(output).toContain('Welcome to Holberton School, what is your name?');
    expect(output).toContain('Your name is: Bob');
    done();
  });
});
