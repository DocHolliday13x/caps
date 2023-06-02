'use strict';

// Bringing in io
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const pickUpOccurred = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  socket.emit('in-transit', payload);
};

const packageDelivered = (payload) => {
  console.log(`DRIVER: delivered ${payload.orderID}`);
  socket.emit('delivered', payload);
};

// Callback function handles pickup event and delivery event
const pickUpAndDeliverHandler = (payload) => {
  setTimeout(pickUpOccurred, 1000, payload);
  setTimeout(packageDelivered, 3000, payload);
};


module.exports = { pickUpOccurred, packageDelivered, pickUpAndDeliverHandler };






