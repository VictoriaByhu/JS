
function filterOddElements(arr) {
  
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    
    let number = arr[i];

    if (number % 2 !== 0) {
      
      newArray.push(number);
    }
  }
  return newArray;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);