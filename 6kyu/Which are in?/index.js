function inArray (array1, array2) {
  return array1
          .map(it => array2.some(item => item.includes(it)) ? it : null)
          .filter(el => el)
          .sort()
}
module.exports = inArray