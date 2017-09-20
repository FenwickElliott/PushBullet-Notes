const Secrets = require('./secrets')
const url = 'https://api.pushbullet.com/v2/users/me';

const fetch = require('node-fetch');


fetch('http://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(json => console.log(json));