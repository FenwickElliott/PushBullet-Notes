const Secrets = require('./secrets')
const url = 'https://api.pushbullet.com/v2/users/me';

const fetch = require('node-fetch');


fetch(url, {
    headers: {"Access-Token": Secrets.api_key}
})
.then(res => res.json())
.then(json => console.log(json));