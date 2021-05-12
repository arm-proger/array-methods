// For each implement method
const forEachImplement = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array)
  }
}

// Example task
const array1 = [1, 2, 3]

let res = 1

const getMulti = (element, idx, arr) => {
  res *= element
  console.log(idx, arr)
  return res
}

forEachImplement(array1, getMulti)

console.log(res)
