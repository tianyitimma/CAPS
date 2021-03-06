'use strict';


//const caps = require('../modules/events');
const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3001/caps');


// const eventClient = client('http://localhost:3001/events');

const driverSocket = io.connect('http://localhost:3001/caps');

driverSocket.on('connect', () =>{
  console.log('connection with ', driverSocket.id);
  // emit('events', 'testing');
});

driverSocket.on('pickup', (payload) => {
  //console.log( `connected with id: ${driverSocket.id}`);
  //driverSocket.emit('events', 'testing event');
  // driverSocket.on('driver', (string) => {
  //   console.log(string);
  // });
  console.log('Package in transit :', payload.orderID);
  driverSocket.emit('in-transit', payload);
  
  driverSocket.emit('delivered', payload);
});
// function driverPickup(payload) {
//   console.log(`DRIVER: picked up ${payload.orderID}`);
//   eventClient.emit('in-transit', payload);
//   console.log(`DRIVER: delivered up ${payload.orderID}`);
//   eventClient.emit('delivered', payload);
// }

