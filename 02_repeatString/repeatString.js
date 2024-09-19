const repeatString = (word, number) => {
  if (number < 0) {
    return "ERROR"
  } else {
    let repeatedWord = ""
    for (let i = 0; i < number; i++) {
      repeatedWord += word // Concatenate the word directly
    }
    return repeatedWord
  }
}

// Do not edit below this line
module.exports = repeatString
