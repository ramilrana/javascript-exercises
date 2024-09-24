const sumAll = function (num, toAdd) {
  if (
    typeof num != "number" ||
    typeof toAdd != "number" ||
    num < 0 ||
    toAdd < 0 ||
    !Number.isInteger(num) ||
    !Number.isInteger(toAdd)
  ) {
    return "ERROR"
  } else {
    let sumOf = 0

    if (num < toAdd) {
      for (let i = num; i <= toAdd; i++) {
        sumOf += i
      }
    } else {
      for (let i = toAdd; i <= num; i++) {
        sumOf += i
      }
    }
    return sumOf
  }
}

// Do not edit below this line
module.exports = sumAll
