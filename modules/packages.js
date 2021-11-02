'use strict';

const eventPool = require('./HUB');

eventPool.on('pickup', (payload) => {
  console.log(`EVENT {
    "event": "pickup",
    "time": ${Date.now()},
    "payload": ${payload}}`);
});

eventPool.on('delivered', (payload) => {
  console.log('Thank you, ', payload.customer);
});