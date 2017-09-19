function switchThoughts (){
    console.log('How do you feel?');
};

var hippo = document.getElementById('hippo');

var butt = document.getElementById('switch');

butt.onclick = function(){
    console.log('butt');
    hippo.innerHTML = "I hate raccons!"
}

var db = openDatabase('dryDB1', '1.0', 'dry run database', 2*1024*1024);

console.log(db);