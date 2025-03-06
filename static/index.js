let websocket;

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.access_token);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        connectWebSocket();
    } else {
        alert('Login failed');
    }
}

async function register() {
    const username = document.getElementById('reg-username').value;
    const fullName = document.getElementById('reg-fullname').value;
    const password = document.getElementById('reg-password').value;
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, full_name: fullName, password }),
    });
    const data = await response.json();
    if (response.ok) {
        alert('Registration successful. Please log in.');
    } else {
        alert('Registration failed: ' + data.detail);
    }
}

function connectWebSocket() {
    const token = localStorage.getItem('token');
    websocket = new WebSocket(`ws://${window.location.host}/ws/chat?token=${token}`);
    websocket.onmessage = function(event) {
        const messages = document.getElementById('messages');
        const message = document.createElement('div');
        message.textContent = event.data;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    };
}

function sendMessage() {
    const input = document.getElementById('message-input');
    websocket.send(input.value);
    input.value = '';
}
