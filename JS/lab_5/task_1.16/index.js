function search(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    
    let middle = Math.floor((left + right) / 2);
    let middleElement = arr[middle];

    
    if (middleElement === target) {
      return middle;
    } 
    
    else if (middleElement < target) {
      left = middle + 1;
    } 
    
    else {
      right = middle - 1;
    }
  }


  return -1;
}

var arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // --> 4

// --- Додаткові тести ---
console.log("Шукаємо 1:", search(arr, 1));   // --> 0
console.log("Шукаємо 34:", search(arr, 34)); // --> 6
console.log("Шукаємо 99 (немає):", search(arr, 99)); // --> -1