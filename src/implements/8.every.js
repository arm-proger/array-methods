// Every implement method
const everyImplement = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index, array)) return false
  }
  
  return true
}

// Example task
let numbers = [5, 5, 5, 5]

const isPrime = (element) => {
  return element === 5
}

console.log(everyImplement(numbers, isPrime))
