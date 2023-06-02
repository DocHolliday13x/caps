'use strict';


const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const { orderHandler, thankDriver } = require('./handler');
const { default: JestHasteMap } = require('jest-haste-map');
const { test } = require('node:test');

jest.mock('socket.io-client', () => {
  return {
    io: jest.fn().mockReturnThis(),
    on: jest.fn(),
    emit: jest.fn(),
    connect: jest.fn(),
  };
});

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
}
);

afterEach(() => {
  consoleSpy.mockRestore();
}
);

describe('Testing Vendor Handlers', () => {
  test('Should log correct emit and console.log() for orderHandler', () => {
    let payload = {
      orderId: '1234',
    };

    orderHandler(payload);

    expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
  });

  test('Should log correct emit and console.log() for deliveredMessage', () => {
    let payload = {
      customer: 'TEST TEST',
    };

    thankDriver(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`VENDOR: Thank you for your order ${payload.orderID}`);
  });

});




