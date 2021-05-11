// Write a function which returns array of usernames.

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
  },
]

const getUserNames = (users) => {
  const userNames = users.map((el) => el.username)

  return userNames
}

console.log(getUserNames(users)) // ['Yuri Gagarin', 'Nil Armstrong']
