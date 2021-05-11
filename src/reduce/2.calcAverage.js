// Write a function which calculates average age of users.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
    age: 56,
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
    age: 54,
  },
]

const getAverageAge = (usersObj) => {
  const sumAges = usersObj.reduce(
    (accumulator, currentItem) => accumulator + currentItem.age,
    0
  )
  const averageResult = sumAges / users.length
  return averageResult
}

console.log(getAverageAge(users)) // 55
