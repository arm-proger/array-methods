// Findimplement method
const findImplement = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return array[index]
    }
  }
  return
}

// Example task
let numbers = [4, 24, 7, 15]

const isPrime = (element) => {
  return element >= 100
}

console.log(findImplement(numbers, isPrime))
