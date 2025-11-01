function findShortestWordAmongMixedElements(arr) {
  let shortestWord = "";

  for (let i = 0; i < arr.length; i++) {
    
    let element = arr[i];

    if (typeof element === 'string') {
      
      if (shortestWord === "") {
        shortestWord = element;
      } 
      
      else if (element.length < shortestWord.length) {
        shortestWord = element;
      }
    }
  }

  return shortestWord;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

// --- Тести для зауважень ---
var output2 = findShortestWordAmongMixedElements([]);
console.log("Тест (порожній масив):", output2); // --> ''

var output3 = findShortestWordAmongMixedElements([1, 2, 3]);
console.log("Тест (немає слів):", output3); // --> ''

var output4 = findShortestWordAmongMixedElements(['hello', 'world', 'js']);
console.log("Тест (кілька слів):", output4); // --> 'js'