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
    return 0;
  }
  
  return smallestNumber;
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output);

// Тест на правило "немає чисел"
var output2 = findSmallestNumberAmongMixedElements(["hello", "world"]);
console.log(output2);

// Тест на правило "порожній масив"
var output3 = findSmallestNumberAmongMixedElements([]);
console.log(output3); 