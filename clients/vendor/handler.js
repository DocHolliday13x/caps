'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
var Chance = require('chance');
var chance = new Chance();

// Order Process Starts w/ setInterval on index level
const orderHandler = (payload = null) => {
  if (!payload){
    let payload = {
      store: chance.company(),
      orderID: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
    console.log('VENDOR: ORDER ready for pickup: ', payload);
    socket.emit('pickup', payload);
  }
  // else {
  //   console.log('VENDOR: ORDER ready for pickup: ', payload);
  //   socket.emit('pickup', payload);
  // }
};

//! TEST FUNCTIONALITY
const deliveredMessage = (payload) => {
  setTimeout(() => {
   thankDriver(payload);
  }, 3000);
};

const thankDriver = (payload) => {
  console.log(`VENDOR: Thank you for your order ${payload.orderID}`);
  // deliveredMessage(payload); //? If I leave this, then my jest test will run and fail to exit out of the test. Why?
};



module.exports = { orderHandler, deliveredMessage, thankDriver };

