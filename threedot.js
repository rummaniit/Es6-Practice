let array1 = [1, 2, 3, 4]
let array2 = [6, 7, 8, 9]
let array3 = [10, 11, 12, 12]

let fullArray = [...array1, ...array2, ...array3]

let maxValue = Math.max(...fullArray)

console.log(fullArray)
console.log(maxValue)