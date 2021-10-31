function sumItems(array) {
  let total = 0;
  // Sum all the numbers in the array by recursion
  for (let item of array) {
    if (Array.isArray(item)) {
      total += sumItems(item);
    } else {
      total += item;
    }
  }
  return total;
}

module.exports = sumItems;
