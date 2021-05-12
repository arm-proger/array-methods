// Some implement method
const someImplement = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) return true
  }

  return false
}

// Example task
let numbers = [3, 4, 3, 2]

const isPrime = (element) => {
  return element === 5
}

console.log(someImplement(numbers, isPrime))
