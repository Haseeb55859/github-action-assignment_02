const fs = require('fs');

try {
  const nameToGreet = process.env['INPUT_WHO-TO-GREET'] || 'World';
  console.log(`Hello, ${nameToGreet}! Welcome to GitHub Actions.`);

  const time = new Date().toTimeString();
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `time=${time}\n`);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
