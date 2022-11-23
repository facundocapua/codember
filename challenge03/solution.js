const getColors = () => {
  return fetch('https://codember.dev/colors.txt')
    .then(res => res.text()) 
    .then(res => eval(res))
}

const getZebra = (colors) => {
  let count = 0
  let maxZebra = 0
  let lastZebra = ''
  let lastColor = ''
  let last2Color = ''

  for(let i = 0; i < colors.length; i++){
    if(colors[i] === lastColor){
      count=0
    }

    if(colors[i] !== last2Color && last2Color !== ''){
      count=1
    }

    count++
    if(count >= maxZebra){
      maxZebra = count
      lastZebra = colors[i]
    }
    lastColor = colors[i]
    last2Color = i >= 1 ? colors[i-1] : ''
  }

  if(count >= maxZebra){
    maxZebra = count
    lastZebra = lastColor
  }

  return({count: maxZebra, color: lastZebra})
}

getColors().then(colors  => {
  const {count, color} = getZebra(colors)
  console.log(`submit ${count}@${color}`)
})