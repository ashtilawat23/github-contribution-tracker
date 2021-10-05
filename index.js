const axios = require('axios');

axios.get('https://api.github.com/ashtilawat23/family-promise-ds-api-demo/branches')
  .then((res) => {
    // handle success
    console.log(res);
  })
  .catch((err) => {
    // handle error
    console.log(err);
  });