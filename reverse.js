// Given a string, return a new string with the reversed order of characters

// Examples
// reverse('apple') === 'elppa'
// reverse('abc') === 'cba'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Todo
    return str.split('').reverse().join('');
}

function reverse1(str) {
    // Todo
    return str.split('').reduce((pre, cur) => cur + pre, "");
}

//loop
function reverse2(str) {
    // Todo
    let newStr = "";
    str.split('').forEach(element => newStr = element + newStr);
    return newStr;
}

function reverse3(str) {
        // Todo
        if(str.length === 0) {
            return ''
        };
        return str.slice(-1) + reverse(str.slice(0, -1));
 }

console.log(reverse('Greetings!'));
console.log(reverse1('Greetings!'));
console.log(reverse2('Greetings!'));
console.log(reverse3('Greetings!'));

