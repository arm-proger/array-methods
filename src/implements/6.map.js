// Map implement method
const mapImplement = (array, callback) => {
  const mappedArr = []

  for (let index = 0; index < array.length; index++) {
    const pushItem = callback(array[index], index, array)

    mappedArr.push(pushItem)
  }

  return mappedArr
}

// Example task
let numbers = [4, 24, 7, 15]

const isPrime = (element) => {
  return (element *= 2)
}

console.log(mapImplement(numbers, isPrime))
