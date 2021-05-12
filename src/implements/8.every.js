// Filter implement method
const filterImplement = (array, callback) => {
  const filteredArr = []

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) return true

    return false
  }

  return filteredArr
}

// Example task
let numbers = [5, 5, 5, 5]

const isPrime = (element) => {
  return element === 5
}

console.log(filterImplement(numbers, isPrime))
