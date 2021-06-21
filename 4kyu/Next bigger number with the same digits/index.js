function nextBigger (n) {
  let result = -1
  if (!n) return result
  const array = n.toString().split('')
  let leak = []
  while (array.length) {
    const next = array.pop()
    const lastNumber = array[array.length - 1]
    leak.push(next)
    if (next > lastNumber) {
      leak.push(lastNumber)
      break;
    }
  }
  console.log(array, leak);
  return result
}

module.exports  = nextBigger