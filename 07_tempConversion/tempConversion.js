const convertToCelsius = function (value) {
  let initValue = (value - 32) / 1.8
  return Math.round(initValue * 10) / 10
}

const convertToFahrenheit = function (value) {
  let initValue = value * 1.8 + 32
  return Math.round(initValue * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
