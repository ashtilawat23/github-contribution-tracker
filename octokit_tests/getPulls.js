require('dotenv').config();
const octokit = require('@octokit/rest');

const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});

const org = process.env.GITHUB_ORG;
const repo = "family-promise-service-tracker-fe-a";

octokit.rest.pulls.list({
    owner: org,
    repo: repo,
    state: 'all',
    sort: 'created',
})
.then( (res) => {
    console.log(res.data);
})
.catch( (err) => {
    console.log(err);
});