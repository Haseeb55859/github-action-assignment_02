const core = require('@actions/core');
const nameToGreet = core.getInput('who-to-greet');
console.log(`Hello, ${nameToGreet}! Welcome to GitHub Actions.`);
