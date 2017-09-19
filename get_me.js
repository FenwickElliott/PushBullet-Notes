const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const Secrets = require('./secrets')
const url = 'https://api.pushbullet.com/v2/users/me';

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.setRequestHeader("Access-Token", Secrets.api_key);
xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
};
xhr.send();

console.log(xhr.status);