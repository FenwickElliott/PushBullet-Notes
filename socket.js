var websocket;
var apiKey = "o.S1eIJqPUfML5uXOYEJbLHgkGUYZQVjOF";
var submit = document.getElementById('submit');
var messages = document.getElementById('messages');
submit.onclick = function() {
    if (websocket != null) {
        websocket.close();
    }
    
    websocket = new WebSocket('wss://stream.pushbullet.com/websocket/' + apiKey);
    websocket.onopen = function(e) {
        messages.innerHTML += "<p>WebSocket onopen</p>";
    }
    websocket.onmessage = function(e) {
        messages.innerHTML += "<p>" + e.data + "</p>";
    }
    websocket.onerror = function(e) {
        messages.innerHTML += "<p>WebSocket onerror</p>";
    }
    websocket.onclose = function(e) {
        messages.innerHTML += "<p>WebSocket onclose</p>";
    }
}