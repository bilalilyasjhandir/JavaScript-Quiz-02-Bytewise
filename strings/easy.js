function extractFirstWord(message) {
    return message.split(' ')[0];
  }

  let message = "Welcome to JavaScript Programming!";
  let firstWord = extractFirstWord(message);
  console.log(firstWord);  