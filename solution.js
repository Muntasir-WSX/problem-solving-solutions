//Problem 1: Staircase
// /**
//  * @param {number} n
//  * @return {string}
//  */
// var staircase = function(n) {
//     if (n <= 0) return "";

//     const rows = [];
//     for (let i = 1; i <= n; i++) {
//         const spaces = ' '.repeat(n - i);
//         const hashes = '#'.repeat(i);
//         rows.push(spaces + hashes);
//     }

//     return rows.join('\n');
// };
// console.log(" Problem 1 ");
// console.log(staircase(4));

// Problem 2: Grading Students

// /**
//  * @param {number[]} grades
//  * @return {number[]}
//  */
// var gradingStudents = function(grades) {
//     return grades.map(grade => {
//         if (grade < 38) {
//             return grade;
//         }

//         const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

//         if (nextMultipleOf5 - grade < 3) {
//             return nextMultipleOf5;
//         }

//         return grade;
//     });
// };

//  console.log(" Problem 2 ");
//  console.log(gradingStudents([73, 67, 38, 33]));

// Problem 3: Time Conversion

// /**
//  * @param {string} s
//  * @return {string}
//  */

// var timeConversion = function(s) {
//     const modifier = s.slice(-2);
//     const timeWithoutModifier = s.slice(0, -2);
//     let [hours, minutes, seconds] = timeWithoutModifier.split(':');

//     if (modifier === 'AM') {
//         if (hours === '12') {
//             hours = '00';
//         }
//     } else if (modifier === 'PM') {
//         if (hours !== '12') {
//             hours = String(parseInt(hours, 10) + 12);
//         }
//     }

//     return `${hours}:${minutes}:${seconds}`;
// };

// console.log(timeConversion("01:29:45AM"))


// Problem 4: String Repeat

// /**
//  * @param {number} n
//  * @param {string} s
//  * @return {string}
//  */
// var repeatStr = function(n, s) {
//     if (n <= 0) return "";
//     return s.repeat(n);
// };

// console.log(repeatStr(3, "ha"));         



// Problem 5: Reversed Strings

// /**
//  * @param {string} str
//  * @return {string}
//  */
// var solution = function(str) {
//     return str.split('').reverse().join('');
// };

//  console.log(solution("world"));           



// problem 6: SUm of Positive

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var positiveSum = function(arr) {
//     return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
// };

//  console.log(positiveSum([1, -4, 7, 12])); 





/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
    
    return (num * (num + 1)) / 2;
};
 console.log(summation(8));               

 