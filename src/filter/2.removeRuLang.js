// Write a function which remove users with language equals to 'ru'.

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

function filterUsers(users) {
  const removedRu = users.filter((el) => el.lang !== 'ru')

  return removedRu
}

console.log(filterUsers(users)) // [{ username: "Nil Armstrong, lang: "ENG" }]
