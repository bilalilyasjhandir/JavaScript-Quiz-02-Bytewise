function removeDuplicates(strings) {
    return [...new Set(strings)];
  }

  let strings = ["Bilal", "Ali", "Ahmad", "Ali", "Dawood", "Bilal"];
  let uniqueStrings = removeDuplicates(strings);
  console.log(uniqueStrings);