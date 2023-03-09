// Task 2: OLD
var multiplyAllOld = a => b => a.map(w = w*b)

// Task 2: NEW
var multiplyAllNew = a => b => a.map(n => n * b)

console.log(multiplyAllNew([1, 2, 3, 4])(2))
