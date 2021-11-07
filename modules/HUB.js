'use strict';

// const caps = require('./events.js');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;

const server = socketio(PORT);

const caps = server.of('/caps');



caps.on('connection', (socket) => {
  console.log('Socket is connected : ', socket.id);

  const logEvent = (event) => (payload) => {
    let log = {
      event,
      time: new Date().toString(),
      payload,
    };
    console.log('EVENT', log);
    socket.broadcast.emit(`${event}`, payload);
  };
  socket.on('package', logEvent('pickup'));

  socket.on('in-transit', logEvent('in-transit'));

  socket.on('delivered', logEvent('delivered'));
  //  => {
  //   console.log('EVENT : ', payload);
  //   socket.broadcast.emit('delivered', payload);
  // });
  // socket.on('pickup', logEvent('pickup'));
  // //socket.emit('pickup', payload);
  // socket.on('in-transit', logEvent('in-transit'));
  // socket.on('delivered', logEvent('delivered'));

});


// events.on('connection', (socket) => {
//   socket.on('pickup', logEvent('pickup'));
//   //socket.emit('pickup', payload);
//   socket.on('in-transit', logEvent('in-transit'));
//   socket.on('delivered', logEvent('delivered'));
// });



// caps.on('pickup', logEvent('pickup'));
// caps.on('in-transit', logEvent('in-transit'));
// caps.on('delivered', logEvent('delivered'));


// require('../Driver/driver.js');
// require('../Vendor/vender.js');
