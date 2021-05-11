// Concatenate the two arrays

// Arrays
const arr1 = [1, 2, 3, 4],
  arr2 = [5, 6, 7, 8, 9]

// Concat Array
const arr3 = [] // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function concatArrs(arr1, arr2, concatArr) {
  const iterationCount = arr1.length + arr2.length - 1

  for (let i = 0; i <= iterationCount; i++) {
    if (i < arr1.length) {
      concatArr.push(arr1[i])
    } else {
      concatArr.push(arr2[i - arr1.length])
    }
  }

  return concatArr
}

console.log(concatArrs(arr1, arr2, arr3))
