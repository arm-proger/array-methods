// Some implement method
const reduceImplement = (array, callback, initialState) => {
  let acc = typeof initialState === "undefined" ? array[0] : initialState;
  const startingIndex = typeof initialState === "undefined" ? 1 : 0;

  for (let index = startingIndex; index < array.length; index++) {
    const element = array[index];
    acc = callback(acc, element, index, array);
  }

  return acc;
};

console.log(reduceImplement([1, 2, 3, 4, 5], (a, b) => a + b));