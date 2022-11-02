const socket = io('http://localhost:3000' , { 
    allowEIO3: true,
    cors : {
        origin: "*"
    },
    transports: ['websocket']

});
socket.on('message', (data) => {
    handleNewMessage(data);
});

const handleSubmitMessage = () => {
    const message = document.getElementById('message');
    socket.emit('message', {data: message.value});
}

const handleNewMessage = (message) => {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.innerHTML = message.data
    messages.appendChild(li);
}