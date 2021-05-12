// Slice implement method
const sliceImplement = (array, fromItem, toItem = array.length) => {
  let slicedArr = []

  for (let index = fromItem; index < toItem; index++) {
    slicedArr.push(array[index])
  }

  return slicedArr
}

// Example task
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(sliceImplement(animals, 2))
// expected output: Array ["camel", "duck", "elephant"]
console.log(sliceImplement(animals, 2, 4))
// expected output: Array ["camel", "duck"]
console.log(sliceImplement(animals, 1, 5))
// expected output: Array ["bison", "camel", "duck", "elephant"]
