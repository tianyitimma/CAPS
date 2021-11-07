'use strict';

// const caps = require('../modules/events');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001/caps');

const faker = require('faker');

//socket.emit('join', '1-206-flowers');

socket.on('delivered', deliveredPackage);

function pickup(storeName) {

  const orderID = faker.datatype.uuid();
  const customer = faker.name.findName();
  const cityState = `${faker.address.city(), faker.address.state()}`;
  
  let packageInfo =  {
    store: storeName,
    orderID: orderID,
    customer: customer,
    address: cityState,
  };
  return packageInfo;
}

function deliveredPackage(payload) {
  console.log(`VENDER: Thank you for delivering ${payload.orderID}`);
}

setInterval(() => {
  socket.emit('package', pickup('1-206-flowers'));
}, 4000);
