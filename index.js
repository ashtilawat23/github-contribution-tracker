require('dotenv').config();
const { Octokit } = require("@Octokit/rest");

const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});

const org = process.env.GITHUB_ORG;
const repos = [
    "family-promise-service-tracker-fe-a", 
    "family-promise-service-tracker-be-a",
    "human-rights-first-police-fe-a",
    "human-rights-first-police-be-a",
    "human-rights-first-police-ds-a",
    "human-rights-first-asylum-fe-a",
    "human-rights-first-asylum-be-a",
    "human-rights-first-asylum-ds-a",
    "scribble-stadium-fe",
    "scribble-stadium-be",
    "scribble-stadium-ds",
    "scribble-stadium-ios",
];

async function getPullsbyRepo(owner, repo) {
    const pulls = await octokit.rest.pulls.list({
        owner: owner,
        repo: repo,
        state: 'all',
        sort: 'created',
    });
    return pulls;
};

function getPromiseArray(repos, getPullsbyRepo) {
    const output = [];
    repos.forEach((repo) => {
        const promise = getPullsbyRepo(org, repo);
        output.push(promise);
    })
    return output;
};

Promise.all(getPromiseArray(repos))
    .then((res) => {
        res.forEach((repo) => {
            repo.data.map((pull) => {
                console.log(pull.url);
            })
        });
    })
    .catch((err) => {
        console.log(err);
    });


