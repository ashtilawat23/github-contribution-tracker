# github-contribution-tracker
Node app that tracks contributions to specific GitHub repos. 

# Authenticate with the GitHub API using @octokit/rest
1. Initialize a node application and create a package.json. 
```
npm init -y
```
2. Install "dotenv" and "@octokit/rest" using your favorite package manager.
```
npm i dotenv
npm i @octokit/rest
```
3. Create a .env.sample file to highlight the keys/tokens you need to access the API. For this project, you will need to login into GitHub and create a Personal Access Token. You can find directions on how to create your Personal Access Token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
4. Create a .env file and paste your access token inside. 
5. Create a new "start" script in your package.json. 
```
"start": "node index.js",
```
6. Create a new file called index.js and import @octokit/rest and configure dotenv.
```
require('dotenv').config();
const { Octokit } = require("@Octokit/rest");
```
7. Using your access token, authenticate with the GitHub API. 
```
const octokit = new Octokit({
    auth: process.env.PERSONAL_GITHUB_ACCESS_TOKEN,
});
```
8. Now you can use ```octokit``` to access the GitHub API. For more info on the functions you can use, check out https://octokit.github.io/rest.js/v18.

##[Loom video on @Octokit/rest implementation](https://www.loom.com/share/24e52b3196864a03818dcbd041fc481e)