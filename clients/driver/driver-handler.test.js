'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { pickUpOccurred, packageDelivered } = require('./handler');

jest.mock('socket.io-client', () => {
  const emit = jest.fn();
  return {
    io: jest.fn().mockReturnValue({
      emit,
    }),
  };
});


let consoleSpy;

beforeAll(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterAll(() => {
  consoleSpy.mockRestore();
});

describe('Testing Driver Handlers', () => {

  test('Should log and emit in-transit after pick up occurs', () => {
    let payload = { orderId: 12345 };
    pickUpOccurred(payload);

    expect(socket.emit).toHaveBeenCalledWith('in-transit', payload);
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
  });


  test('should emit delivered and log Driver delivery ', () => {
    let payload = { orderId: 12345};
    packageDelivered(payload);

    expect(socket.emit).toHaveBeenCalledWith('delivered', payload);
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderID}`);
  });

});

