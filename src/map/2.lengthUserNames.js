// Write a function which returns array of lengths of user names.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

const getUsernameLengths = (users) => {
  const userNamesLength = users.map((el) => el.username.length)

  return userNamesLength
}

console.log(getUsernameLengths(users)); // [12, 13]

