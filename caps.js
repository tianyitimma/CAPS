'use strict';

const { EventEmitter } = require('events');
const faker = require('faker');

const storeName = faker.company.companyName();
const orderID = faker.random.uuid();
const customer = faker.name.findName();
const cityState = `${faker.address.city(), faker.address.state()}`;

const notification = new EventEmitter();

notification.on('pickup', pickUpPackage);
notification.on('pickup', driverPickup);
notification.on('in-transit', inTransit);
notification.on('delivered', deliveredPackage);


function pickUpPackage(payload) {

  console.log(`EVENT {
    "event": "pickup",
    "time": ${Date.now()},
    "payload": ${JSON.stringify(payload)}}`);
}

function driverPickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  notification.emit('in-transit', payload);
  console.log(`DRIVER: delivered ${payload.orderID}`);
  notification.emit('delivered', payload);
}

function inTransit(payload) {
  console.log(`EVENT {
    "event": "in-transit",
    "time": ${Date.now()},
    "payload": ${JSON.stringify(payload)}}`);
}

function deliveredPackage(payload) {
  
  console.log(`VENDER: Thank you for delivering ${payload.orderID}`);
  console.log(`EVENT {
    "event": "delivered",
    "time": ${Date.now()},
    "payload": ${JSON.stringify(payload)}}`);
}

notification.emit('pickup', {
  store: storeName,
  orderID: orderID,
  customer: customer,
  address: cityState,
});
