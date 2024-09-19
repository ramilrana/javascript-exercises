const reverseString = function (word) {
  if (word.split("") > 1) {
    word
      .split(" ")
      .reverse()
      .map(eachWord.split("").reverse().join(""))
      .join(" ")
  } else {
    return word.split("").reverse().join("")
  }
}

// Do not edit below this line
module.exports = reverseString
