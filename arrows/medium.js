const filterEvenNumbers = (numbers) => numbers.filter(number => number % 2 === 0);

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);