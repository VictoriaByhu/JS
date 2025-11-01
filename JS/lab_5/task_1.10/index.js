function findSmallestNumberAmongMixedElements(arr) {
  
  let smallestNumber = null;

  for (let i = 0; i < arr.length; i++) {
    
    let element = arr[i];

    if (typeof element === 'number') {
      
      if (smallestNumber === null || element < smallestNumber) {
        smallestNumber = element;
      }
    }
  }

  if (smallestNumber === null) {
    return '';
  }
  
  return smallestNumber;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

// --- Тести для зауважень ---
var output2 = findSmallestNumberAmongMixedElements([]);
console.log("Тест (порожній масив):", output2); // --> ''

var output3 = findSmallestNumberAmongMixedElements(['hello', 'world']);
console.log("Тест (немає чисел):", output3); // --> ''

var output4 = findSmallestNumberAmongMixedElements([10, 'apple', 5, 12, 'banana', 3]);
console.log("Тест (кілька чисел):", output4); // --> 3