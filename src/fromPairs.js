var _curry1 = require('./internal/_curry1');
var _isArray = require('./internal/_isArray');


/**
 * Creates a new object out of a list key-value pairs.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var idx = 0, len = pairs.length, out = {};
  while (idx < len) {
    if (_isArray(pairs[idx]) && pairs[idx].length) {
      out[pairs[idx][0]] = pairs[idx][1];
    }
    idx += 1;
  }
  return out;
});
