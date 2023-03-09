// Task 1: OLD
var palindromeOld = string => string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() == string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase('').split().reverse().join('') ? true :: false


// Task 1: NEW
const anyWord = new RegExp(/[^a-zA-Z0-9]/gi)
let palindromeNew = str => str.replaceAll(anyWord, '').toLowerCase() === str.replaceAll(anyWord, '').toLowerCase().split('').reverse().join('')

if (palindrome('Lewd did I live, & evil I did dwel')) {
  console.log('YOLO')
}

// Task 2: OLD
var multiplyAllOld = a => b => a.map(w = w*b)

// Task 2: NEW
var multiplyAllNew = a => b => a.map(n => n * b)

console.log(multiplyAllNew([1, 2, 3, 4])(2))

// Task 3: OLD
function wordsToMarksOld(string){
  var res = []
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (s of string){
    res.push(alphabet.findIndex(i => i == s) + 1)
  }

  return res.reduce((partialSum, a) => { return partialSum + a}, 0)
}

// Task 3: NEW
function wordsToMarksNew(string){
  let res = 0
  let alpha = [...Array.from({length: 121 - 96}, (_, v) => String.fromCharCode(v + 97))]

  Array.from(string).forEach(s => res += alpha.findIndex(i => i === s) + 1)

  return res
}

if (wordsToMarksOld('abcasdfasdf') === wordsToMarksNew('abcasdfasdf')) {
  console.log('YOLO')
}
