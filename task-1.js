// Task 1: OLD
var palindromeOld = string => string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() == string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase('').split().reverse().join('') ? true :: false


// Task 1: NEW
const anyWord = new RegExp(/[^a-zA-Z0-9]/gi)
let palindromeNew = str => str.replaceAll(anyWord, '').toLowerCase() === str.replaceAll(anyWord, '').toLowerCase().split('').reverse().join('')

if (palindrome('Lewd did I live, & evil I did dwel')) {
  console.log('YOLO')
}
