/* eslint-disable no-else-return */
/*
 * stmnts-05.js
 * Language: javascript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 * Boolean expressions for numbers
 */

/**
 * Check if a number is odd
 * @param {number} num - number to check
 * @returns {boolean} - true if num is odd, false otherwise
 */
function isOdd(num) {
  if (num % 2 !== 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/**
 * Check if a number is even
 * @param {number} num - number to check
 * @returns {boolean} - true if num is even, false otherwise
 */
function isEven(num) {
  if (num % 2 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/**
 * Check if a value is a number and negative
 * @param {*} value
 * @returns {boolean} - true if value is a negative number, false otherwise
 */
function isNegative(value) {
  if (value + 1 <= 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = {
  isOdd,
  isEven,
  isNegative,
};
