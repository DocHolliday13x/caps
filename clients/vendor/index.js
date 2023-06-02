'use strict';

const { orderHandler, deliveredMessage } = require('./handler');

// Bringing in io for drivers and vendors
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

// .on() should be at the index level
socket.on('delivered', deliveredMessage);

//! TEST FUNCTIONALITY
let store = '1-206-UrtUrt';
socket.emit('join', store);

// Order Process Generated w/ setInterval
setInterval(orderHandler, 5000);






