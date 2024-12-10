// 1.Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(50, 6));  

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(7)); 
console.log(isOdd(10)); 

//3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(array) {
    return Math.min(...array);
}
console.log(findMin([5, 1, 9, 3, 7])); 
console.log(findMin([15, 20, 4, 10]));


//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(array) {
    return array.sort((a, b) => b - a);
}

console.log(sortArrayDescending([25, 2, 50, 20, 5,10, 40, 60, 90, 70]));

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello Word")); 

//7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(array) {
    if (array.length === 0) return 0; 
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length; 
}
console.log(findAverage([15, 25, 30, 40, 50]));

//8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

function isLeapYear(year){
        if(year % 400 == 0){
            return true;
        } else if( year % 100 == 0){
            return false;
        } else if(year % 4 ==0){
            return true;
        } else {
            return false;
        }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2019));





