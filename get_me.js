const Secrets = require('./secrets')
const url = 'https://api.pushbullet.com/v2/users/me';
const jsonfile = require('jsonfile')
const fetch = require('node-fetch');

var me = fetch(url, {
    headers: {"Access-Token": Secrets.api_key}
})
.then(res => res.json())
.then(function(json){
    jsonfile.writeFile('./me.json', json, function (err) {
        console.error(err)
       })
    return;
});
