// Write a function which parses string integers. If it's not possible to parse, then add null.

const parseInteger = (arr) => {
  const parsedArr = arr.map((el) => {
    const elNumber = Number(el)
    return elNumber === elNumber ? elNumber : null
  })

  return parsedArr
}

console.log(parseInteger(['1', '2', '34'])) // [1, 2, 34];
console.log(parseInteger(['1', 'px', '2323'])) // [1, null, 2323];
