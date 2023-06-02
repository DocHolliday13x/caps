`use strict`;

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

// socket server singleton
const server = new Server();

// create a namespace
const caps = server.of('/caps');

function logger(event, payload) {
  let timestamp = new Date();
  console.log('EVENT', { event, timestamp, payload });
}

// allow connections to the caps namespace
caps.on('connection', (socket) => {
  // confirmation of connection
  console.log('connected to caps namespace', socket.id);

  // Joining a room
  socket.on('join', (room) => {
    console.log('Possible rooms -----', socket.adapter.rooms);
    console.log('Payload is the following room -----', room);
    socket.join(room);
  });

  // // any event emitted is read by onAny will be logged
  // socket.onAny((event, payload) => {
  //   let timestamp = new Date();
  //   // logs everything required by lab
  //   console.log('EVENT', { event, timestamp, payload });
  // });

  // listens for and relays pickup events
  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    // sends to all clients except sender, can do this many other ways
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    socket.broadcastt.emit('delivered', payload);
  });
});

console.log('caps server up on', PORT);
server.listen(PORT);









