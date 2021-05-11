// Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43] // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

// Is over 18
function isEighteenOver(accum, item) {
  return item > 18 ? accum + item : accum
}

// Reduce function
let result = arr.reduce(
  (accumulator, currentItem) => isEighteenOver(accumulator, currentItem),
  0
)

console.log(result)
