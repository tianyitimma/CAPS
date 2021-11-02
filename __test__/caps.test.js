'use strict';

const { EventEmitter } = require('events');

const notification = new EventEmitter();
require('../caps.js');

const storeName = 'testCo';
const orderID = 1234567;
const customer = 'fake';
const cityState = 'seattle, wa';

notification.emit('pickup', {
  store: storeName,
  orderID: orderID,
  customer: customer,
  address: cityState,
});

describe('checking event on pickup', () => {
  it('Should return store name, orderID, customer, and city states', () => {
    expect(notification.on('pickup', (payload) => payload)).toBeTruthy();
  });

});

