'use strict';

const caps = require('../modules/events');

const faker = require('faker');

caps.on('delivered', deliveredPackage);

function pickup(storeName) {

  const orderID = faker.random.uuid();
  const customer = faker.name.findName();
  const cityState = `${faker.address.city(), faker.address.state()}`;
  
  caps.emit('pickup', {
    store: storeName,
    orderID: orderID,
    customer: customer,
    address: cityState,
  });
}

function deliveredPackage(payload) {
  console.log(`VENDER: Thank you for delivering ${payload.orderID}`);
}

pickup('KFC');