const getMessage = () => {
  return fetch('https://codember.dev/encrypted.txt')
    .then(res => res.text()) 
}

const decodeWord = (word) => {
  const digits = word.split('')
  const chars = []
  let auxChar = ''
  digits.forEach(digit => {
    auxChar = auxChar + digit 
    if(parseInt(auxChar) > 60){
      chars.push(auxChar)
      auxChar = ''
    }
  })

  return chars.map(char => String.fromCharCode(char)).join('')
}

const decodeMessage = (message) => {
  const words = message.split(' ')
  const decodedWords = words.map(decodeWord)

  return decodedWords.join(' ')
}

getMessage().then(message  => {
  console.log(message)
  const decodedMessage = decodeMessage(message);
  console.log(`submit ${decodedMessage}`)
})