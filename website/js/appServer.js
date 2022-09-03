const sock = io();
sock.on("message", () => {
    console.log('event');
});
sock.emit('message', 'hi connected');
