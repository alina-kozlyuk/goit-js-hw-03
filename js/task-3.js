function filterArray(numbers, value) {
  const ourNumbers = [];
  for (let i = 0; i < numbers.length; i++){
    const item = numbers[i];
    if (item > value) {
      ourNumbers.push(item);
    }
  }
  return ourNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
