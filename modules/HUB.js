'use strict';

const caps = require('./events.js');

const logEvent = (event) => (payload) => {
  let log = {
    event,
    time: new Date().toString(),
    payload,
  };
  console.log('EVENT', log);
};


caps.on('pickup', logEvent('pickup'));
caps.on('in-transit', logEvent('in-transit'));
caps.on('delivered', logEvent('delivered'));


require('../Driver/driver.js');
require('../Vendor/vender.js');
