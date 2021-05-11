// Write a function which filters object by field.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
    isAstronaut: true,
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
    isAstronaut: true,
  },
  {
    username: 'Elon Musk',
    isAstronaut: false,
  },
]

const filterByField = (usersArr, filterOption) => {
  const filteredUserArr = usersArr.filter((el) => el[filterOption])
  return filteredUserArr
}

console.log(filterByField(users, 'isAstronaut')) // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
