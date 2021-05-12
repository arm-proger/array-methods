// Filter implement method
const filterImplement = (array, callback) => {
  const filteredArr = []

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

console.log(filterImplement(numbers, isPrime))
