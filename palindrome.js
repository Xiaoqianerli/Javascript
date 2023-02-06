// Exercise 2
// Given a string, return true if the string is a palindrome, otherwise return false
// palindrome are strings that form the same word if it's reversed.

// Examples:
// palindrome('abba') === true // bcz the reversing string of 'abba' is also equal to 'abba'
// palindrome('abcdefg') === false // bcz the reversing string of 'abcdefg' is 'gfedcba' which is not equal to 'abcdefg'

function palindrome(str) {
    const newStr = str.split('').reverse().join('');
    return newStr === str;
}

// function palindrome2(str) {
//     let flag = true;
//     let num = 0;
//     const newStr = str.split('').reverse().join('');

//     while(num <= str.length) {
//         if(newStr[num] !== str[num]) {
//             flag = false;
//             break;
//         } 
//         num++;
//     }

//     return flag;
// }

// function palindrome3(str) {
//     let flag = true;
//     let num = 0;
//     while(num <= Math.floor(str.length/2)) {
//         if(str[num] !== str[str.length - 1 -num]) {
//             flag = false;
//             break;
//         } 
//         num++;
//     }

//     return flag;
// }

// function palindrome4(str) {
//     let flag = true;
//     let num = 0;
//     while(num <= str.length) {
//         if(str[0] === str[str.length - 1]) {
//             str = str.slice(1);
//             str = str.slice(0,-1);
//         } else {
//             flag = false;
//             break;
//         }
//         num++;
//     }

//     return flag;
// }
function palindrome5(str) {
    const length = str.length;
    for (let index = 0; index < length; index++) {
        if (str[index] !== str[length - 1 - index]) {
            return false
        }
    }
    return true;
}







console.log(palindrome4('abcdefg'));
console.log(palindrome4('abCba')); 




