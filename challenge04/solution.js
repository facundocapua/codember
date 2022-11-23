const solutions = []

const MIN_NUMBER = 11098
const MAX_NUMBER = 98123
const REPEATED_DIGIT = 5

const isValid = (number) => {
  const digits = number.toString().split('')
  const repeatedNumber = digits.filter((digit) => Number(digit) === REPEATED_DIGIT).length

  if(repeatedNumber < 2) return false

  for(let i = 0; i < digits.length; i++) {
    const digit = Number(digits[i])
    const nextDigit = Number(digits[i + 1])

    if(digit > nextDigit) return false
  }

  return true
}

for(let i = MIN_NUMBER; i<=MAX_NUMBER; i++){
  if(isValid(i)){
    solutions.push(i)
  }
}

console.log(`submit ${solutions.length}-${solutions[55]}`)