require('dotenv').config();
const octokit = require('@octokit/rest');

const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});

console.log(octokit);