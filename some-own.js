function someOwn(o, cb, scope) {
  var owns = {}.hasOwnProperty
  for (var k in o) {
    if (owns.call(o, k)) {
      if (cb.call(scope, o[k], k, o)) {
        return true
      }
    }
  }
  return false
}

module.exports = someOwn;
