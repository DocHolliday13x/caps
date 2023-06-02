'use strict';

// Bringing in io for drivers and vendors
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { pickUpAndDeliverHandler } = require('./handler');

// Listens to emit 'pickup' from vendor that triggers pickUpAndDeliverHandler function
socket.on('pickup', pickUpAndDeliverHandler);

//! TEST FUNCTIONALITY
let store = '1-206-UrtUrt';
socket.emit('join', store);









