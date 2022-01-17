const permutations = (_arr) => {
  let reuslt = []
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      reuslt.push(m.join(''))
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice()
        let next = curr.splice(i, 1)
        console.log(curr, next);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(_arr)
  return reuslt
}