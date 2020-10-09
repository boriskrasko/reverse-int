module.exports = function reverse (n) {
let reverseNumber = parseInt(n.toString().split('').reverse().join(''));
  return reverseNumber;
}
