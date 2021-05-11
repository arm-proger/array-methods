// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules.

// Asc function
const sortedAsc = (array) => {
  return array.sort((firstItem, secondItem) => {
    return firstItem - secondItem
  })
}
// Asc function
const sortedDesc = (array) => {
  return array.sort((firstItem, secondItem) => {
    return secondItem - firstItem
  })
}

// Sort by position
const sortBy = (arr, position) => {
  let sortedArr = []
  if (position === 'Asc') sortedArr = sortedAsc(arr)
  else if (position === 'Desc') sortedArr = sortedDesc(arr)

  return sortedArr.length > 0 ? sortedArr : arr
}

console.log(sortBy([4, 3, 2, 1], 'Asc')) // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66])) // [7, 8, 11, 66]
console.log(sortBy([7, 8, 11, 66], 'Desc')) // [66, 11, 8, 7]
