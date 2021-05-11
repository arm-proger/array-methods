// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN] // [1, 2, 55, 166]

const onlyNumsArr = arr.filter((el) => {
  if (typeof el === 'number' && el === el) {
    return el
  }
})

console.log(onlyNumsArr)
