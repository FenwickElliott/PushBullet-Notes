const fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts/1')
.then(function(res){
    // console.log(res.json());
    return res.json();
})
.then(function(json){
    console.log(json);
})