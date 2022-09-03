const http = require('http');
const express = require('express');
const socket = require('socket.io');

//to handle things (app)
const app = express();

app.use(express.static('online')); 

const httpServer = http.createServer(app);

const io = socket(httpServer);

let waitingPlayer = null;

//when connect make message
io.on('connection', (sock) => {
    //    sock.emit('message', 'hi connected');
    if (waitingPlayer) {
        // start a game
        sock.emit('message', 'gamestart');
        waitingPlayer.emit('message', 'gamestart');
        waitingPlayer = null;
    } else {
        waitingPlayer = sock;
        waitingPlayer.emit('message', 'waitingPlayer');
    }
    //receving
    sock.on('message', (txtVal) => {
        io.emit('message', txtVal);
    });
    sock.on('play', (playval) => {
        io.emit('play', playval);
    });

});

httpServer.listen(8000,()=>console.log('listen to 8000'))