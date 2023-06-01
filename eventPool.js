'use strict';

// Create a global event pool
const Event = require('events');

const eventPool = new Event();

module.exports = eventPool;
