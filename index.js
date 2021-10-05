require('dotenv').config();
const { Octokit } = require("@Octokit/rest");

const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});

const org = "Lambda-School-Labs";
const test_repo = "family-promise-service-tracker-fe-a";
let shaArray = [];

// // Code to log commit sha's from the GitHub API 
// octokit.rest.repos.listCommits({
//     owner: "Lambda-School-Labs",
//     repo: "family-promise-service-tracker-fe-a"
// })
// .then( (res) => {
//     res.data.forEach((commit) => {
//         console.log(commit.sha);
//     });
// })
// .catch( (err) => {
//     console.log(err);
// });

async function getCommitsbyRepo(owner, repo) {
    const commits = await octokit.rest.repos.listCommits({
        owner: owner,
        repo: repo
    });
    return commits;
}


Promise.all([getCommitsbyRepo(org, test_repo)])
    .then((res) => {
        res.forEach((repo) => {
            repo.data.map((commit) => {
                commit.sha = [...shaArray];
            })
        });
    })
    .catch((err) => {
        console.log(err);
    });

    console.log(shaArray);

