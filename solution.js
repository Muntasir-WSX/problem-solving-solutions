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



// Problem 7: Grasshopper Summation

// /**
//  * @param {number} num
//  * @return {number}
//  */
// var summation = function(num) {
    
//     return (num * (num + 1)) / 2;
// };
//  console.log(summation(8));               




// Problem 8: Convert a Boolean to a String

// /**
//  * @param {boolean} b
//  * @return {string}
//  */
// var booleanToString = function(b) {
//     return String(b);
// };

//  console.log(booleanToString(true));      





// // Problem 9: Fizz Buzz
// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(String(i));
//         }
//     }
//     return result;
// };

//  console.log(fizzBuzz(5));




// Problem 10: Running Sum of 1D Array

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var runningSum = function(nums) {
//     let currentSum = 0;
//     return nums.map(num => {
//         currentSum += num;
//         return currentSum;
//     });
// };

// console.log(runningSum([1,2,3,4]));


// Problem 11: Richest Customer Wealth

// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function(accounts) {
//     let maxWealth = 0;
    
//     for (let customer of accounts) {
//         const currentWealth = customer.reduce((sum, bank) => sum + bank, 0);
//         if (currentWealth > maxWealth) {
//             maxWealth = currentWealth;
//         }
//     }
    
//     return maxWealth;
// };

//  console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));




 // Problem 12: Remove Duplicates from Sorted Array


//  /**
// //  * @param {number[]} nums
// //  * @return {number}
// //   */
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;
    
//     let k = 1; 
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// };

// const nums12 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums12), nums12.slice(0, 5));





// Problem 13: Contains Duplicate

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const seen = new Set();
    
//     for (let num of nums) {
//         if (seen.has(num)) {
//             return true;
//         }
//         seen.add(num);
//     }
    
//     return false;
// };

//  console.log(containsDuplicate([1, 2, 3, 1])); 




// // Problem 14: Move Zeroes

// /**
//  * @param {number[]} nums
//  * @return {void}
//  */
// var moveZeroes = function(nums) {
//     let nonZeroIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[nonZeroIndex] = nums[i];
//             nonZeroIndex++;
//         }
//     }
//     for (let i = nonZeroIndex; i < nums.length; i++) {
//         nums[i] = 0;
//     }
// };



//  const nums14 = [0, 1, 0, 3, 12];
//  moveZeroes(nums14);
//  console.log(nums14); // [1, 3, 12, 0, 0]





// Problem 15: Merge Sorted Array

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} 
//  */
// var merge = function(nums1, m, nums2, n) {
//     let p1 = m - 1; 
//     let p2 = n - 1; 
//     let p = m + n - 1; 
    
//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }
    
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
// };
// const nums15_1 = [1, 2, 3, 0, 0, 0];
//  merge(nums15_1, 3, [2, 5, 6], 3);
//  console.log(nums15_1);







// // Problem 15: Merge Sorted Array

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let p = m + n - 1;
    
//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }
    
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
// };


// Problem 16: 3Sum

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     const result = [];
//     nums.sort((a, b) => a - b);
    
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
        
//         let left = i + 1;
//         let right = nums.length - 1;
        
//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
            
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;
                
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
    
//     return result;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// // Problem 17: Plus One

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0;
//     }
//     digits.unshift(1);
//     return digits;
// };

// console.log(plusOne([1, 2, 9]));


// Problem 18: Reverse String

// /**
//  * @param {string[]} s
//  * @return {void} 
//  */
// var reverseString = function(s) {
//     let left = 0;
//     let right = s.length - 1;
    
//     while (left < right) {
//         const temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
        
//         left++;
//         right--;
//     }
// };

// const chars = ["h", "e", "l", "l", "o"];
//  reverseString(chars);
//  console.log(chars);


// Problem 19: Length of Last Word

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     const trimmed = s.trim();
//     const words = trimmed.split(/\s+/);
//     return words[words.length - 1].length;
// };


// console.log(lengthOfLastWord("   fly me   to   the moon  ")); 




// Problem 20: Longest Common Prefix

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     if (!strs || strs.length === 0) return "";
    
//     let prefix = strs[0];
    
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//             if (prefix === "") return "";
//         }
//     }
    
//     return prefix;
// };


//  console.log(longestCommonPrefix(["flower", "flow", "flight"])); 