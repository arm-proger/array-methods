// How to take arguments in sum function?

function sum(...args) {
  return args.reduce((sum, current) => {
    return sum + current
  })
}

console.log('Points::', sum(1, 2)) // prints 3
console.log('Points::', sum(1, 2, 3)) // prints 6
