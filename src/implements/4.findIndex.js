// Find index implement method
const findIndexImplement = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if(callback(array[index], index, array)) {
      return index
    }
  }
  return -1
}

// Example task
let numbers = [4, 6, 7, 12]

const isPrime = (element) => {
  return element >= 12
}

console.log(findIndexImplement(numbers, isPrime))