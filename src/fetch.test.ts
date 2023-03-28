import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('Test An experimental fetch API', () => {
  test('should get status code 200 from http call GET', async () => {
    const res = await fetch('https://nodejs.org/api/documentation.json');

    assert.equal(
      res.status,
      200,
      `it was expecting status code 200 but got ${res.status}`,
    );
  });
});
