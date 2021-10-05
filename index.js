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
                shaArray.push(commit.sha);
            })
        });
    })
    .catch((err) => {
        console.log(err);
    });

// The program runs the console.log() before the promise is fulfilled. So, to delay the console.log(), a timeout was added to initiate the console.log().

function displayResponseArray() {
    console.log(shaArray);
}

setTimeout(displayResponseArray, 3000);

