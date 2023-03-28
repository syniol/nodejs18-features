import test from "node:test";
import assert from "node:assert";

test("array findLast & findLastIndex in V8 engine", function() {
  const inputArray = [{v:1}, {v:2}, {v:3}, {v:4}, {v:5}];

  assert.deepEqual(
    inputArray.findLast((element) => element.v % 2 === 0),
    {v:4},
  )

  assert.deepEqual(
    inputArray.findLast((element) => element.v % 7 === 0),
    undefined,
  )

  assert.deepEqual(
    inputArray.findLastIndex((element) => element.v % 2 === 0),
    3,
  )

  assert.deepEqual(
    inputArray.findLastIndex((element) => element.v % 7 === 0),
    -1
  )
})