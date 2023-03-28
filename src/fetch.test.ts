import { test, describe } from "node:test";
import assert from "node:assert";

describe("test fetch", function() {
  test("should get json from http call GET", async () => {
    const res = await fetch('https://nodejs.org/api/documentation.json');

    assert.equal(
      res.status,
      200,
      `it was expecting status code 200 but got ${res.status}`,
    )
  })
})
