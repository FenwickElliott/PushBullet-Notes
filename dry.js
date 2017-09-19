function switchThoughts (){
    console.log('How do you feel?');
};

var hippo = document.getElementById('hippo');

var butt = document.getElementById('switch');

butt.onclick = function(){
    console.log('butt');
    hippo.innerHTML = "I hate raccons!"
}