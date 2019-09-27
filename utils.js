/* eslint-disable semi */

function random(n) {
  return Math.floor(Math.random() * n)
}

function randomD(n) {
  return Math.floor(Math.random() * (n)) + 1;
}

function randomRolls(n, s) {
  const result = []
  for (let i = 0; i < n; i += 1) {
    result.push(randomD(s))
  }
  return result
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
