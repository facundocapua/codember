const REQUIRED = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const parseUser = text => {
  const array = text.replaceAll("\n", " ")
      .split(" ")
      .filter(prop => prop !== "")

  return array.reduce((user, line) => {
    const [key, value] = line.split(":")
    user[key] = value
    return user
  }, {})
}

const getUsers = () => {
  return fetch('https://codember.dev/users.txt')
    .then(res => res.text())  
    .then(text => text.split("\n\n"))
    .then(users => users.map(parseUser))
}

const isValidUser = user => {
  return REQUIRED.every(field => user.hasOwnProperty(field))
}


getUsers().then(users  => {
  const validUsers = users.filter((user) => isValidUser(user))
  console.log(`submit ${validUsers.length}${validUsers.at(-1).usr}`)
})