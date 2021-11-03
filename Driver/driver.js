'use strict';

const caps = require('../modules/events');

caps.on('pickup', driverPickup);


function driverPickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  caps.emit('in-transit', payload);
  console.log(`DRIVER: delivered up ${payload.orderID}`);
  caps.emit('delivered', payload);
}

