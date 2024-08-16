function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
}
  
let wordsArray = ["Bahawalpur", "Multan", "Islamabad", "Lahore"];
let longest = findLongestWord(wordsArray);
console.log(longest);  