'use strict';

// const caps = require('./events.js');
const io = require('socket.io');

// const PORT = process.env.PORT || 3001;

const server = io(3030);

// const caps = server.of('/caps');

//const events = server.of('/events');



server.on('conncetion', (socket) => {
  console.log('Socket is connected', socket.id);

  socket.on('events', (string) => {
    socket.emit('driver', string);
    console.log(string);
  });

});

