require('dotenv').config();
const { Octokit } = require("@Octokit/rest");

const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});

octokit.rest.repos.listBranches({
    owner: "Lambda-School-Labs",
    repo: "family-promise-service-tracker-fe-a"
})
.then( (res) => {
    console.log(res.data);
})
.catch( (err) => {
    console.log(err);
});
