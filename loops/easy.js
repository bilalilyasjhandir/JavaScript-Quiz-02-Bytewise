function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let numbersArray = [1, 2, 3, 4, 5, 6];
let totalSum = sumOfNumbers(numbersArray);
console.log(totalSum); 