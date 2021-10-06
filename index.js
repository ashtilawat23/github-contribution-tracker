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
const contributions = new Map();

async function getPullsbyRepo(owner, repo) {
    const pulls = await octokit.rest.pulls.list({
        owner: owner,
        repo: repo,
        state: 'all',
        sort: 'created',
        direction: 'desc',
    });
    return pulls;
};

function getPromiseArray(repos) {
    const output = [];
    repos.forEach((repo) => {
        const promise = getPullsbyRepo(org, repo);
        output.push(promise);
    })
    return output;
};

function filterPullsbyDateCreated(isoString, numMonths) {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const createdAt = new Date(isoString);
    const elapsedTimeInDays = Math.round(Math.abs((today - createdAt) / oneDay));
    return elapsedTimeInDays <= numMonths*30;
};

Promise.all(getPromiseArray(repos))
    .then((res) => {
        const today = new Date(); 
        res.forEach((repo) => {
            repo.data.map((pull) => {
                if (filterPullsbyDateCreated(pull.created_at, 3)){
                    if (contributions.has(pull.user.login)) {
                        contributions.set(pull.user.login, contributions.get(pull.user.login) + 1)
                    }
                    else {
                        contributions.set(pull.user.login,1);
                    }
                };
            })
        });
    })
    .catch((err) => {
        console.log(err);
    });

function testScript() {
    console.log(contributions);
};

setTimeout(testScript,3000);


