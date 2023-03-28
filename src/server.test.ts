import { describe, test } from 'node:test';
import { createServer } from 'http';
import assert from 'node:assert';

describe('Test HTTP Timeouts', () => {
  test('Settings for VPS or Server without reverse proxy', async () => {
    const httpServer = createServer(function () {
      assert.equal(
        httpServer.headersTimeout,
        60000,
        'HTTP headers is now set to 60000 (60 seconds) by default',
      );

      httpServer.headersTimeout = 0;

      assert.equal(
        httpServer.requestTimeout,
        300000,
        'receiving the entire request from the client is now set to 300000 (5 minutes) by default',
      );

      httpServer.requestTimeout = 0;

      // Closing server by using close() method
      httpServer.close(() => {
        console.log('server is closed');
      });
    });
  });
});
