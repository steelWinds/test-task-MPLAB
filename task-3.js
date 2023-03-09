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
