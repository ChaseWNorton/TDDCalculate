const assert = require('assert');
const Calculate =  require('../index.js')


describe('Calculate', () => {
  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
        let expected = 2 + 2;
        let results = Calculate.add(2,2);
        assert.equal(expected, results);
    })
  })

  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      let expected = 5-2;
      let results = Calculate.subtract(5,2);
      assert.equal(expected, results);
    })
  })

  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      //setup
        let expected = 2 * 7;
      //exercise
        let results = Calculate.multiply(2,7)
      //verify
      assert.equal(expected, results);
    })
  })

  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      //setup
      let expected = 4/2;
      //exercise
      let results = Calculate.divide(4,2);
      //verify
      assert.equal(expected, results);
    })

    it('throws an error when the divisor is 0', () => {
      assert.throws(() => Calculate.divide(4,0),Error, "the quotient of a number and 0 is undefined")
    })
  })

  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      //setup
      let expected = Math.abs(-4)
      //exercise
      let results = Calculate.absoluteValue(-4);
      //verify
      assert.equal(expected, results);
    })
  })

})