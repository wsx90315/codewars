function comp (array1, array2) {
  //your code here
  if (!array1 || !array2) return false
  const arr = [...array1]
  const arr2 = [...array2]
  let result = true
  while (arr.length) {
    const next = arr.pop()
    const math = Math.pow(next, 2)

    const index = arr2.indexOf(math)
    arr2.splice(index, 1)
    if (index === -1) {
      result = false
      break;
    }
  }
  console.log(arr2);
  return result
}
module.exports = comp