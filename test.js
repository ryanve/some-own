const someOwn = require("./")
const assert = require("assert")

assert.strictEqual(someOwn({x: 5, y: 0}, value => value < 0), false)
assert.strictEqual(someOwn({x: -5, y: 0}, value => value < 0), true)
assert.strictEqual(someOwn({x: 5, y: 0}, (value, key) => key.length === 1), true)

if (true) {
  let array = []
  assert.strictEqual(someOwn({x: 5, y: 0}, value => array.push(value)), true)
  assert.strictEqual(array.length, 1)
}

if (true) {
  let array = []
  assert.strictEqual(someOwn({x: 5, y: 0}, value => array.push(value) > 10), false)
  assert.strictEqual(array.length, 2)
}

if (true) {
  let that = {}
  let object = {x: 5}
  someOwn(object, function(value, key, o) {
    assert.strictEqual(this, that)
    assert.strictEqual(arguments.length, 3)
    assert.strictEqual(value, 5)
    assert.strictEqual(key, "x")
    assert.strictEqual(o, object)
  }, that)
}

console.log("Tests passed =)")
