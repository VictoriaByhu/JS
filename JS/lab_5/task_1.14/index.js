function findPairForSum(arr, sum) {

  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num1 + num2 === sum) {
        return [num1, num2];
      }
    }
  }

  return [];
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

// --- Інші тести ---
var pair2 = findPairForSum([10, 1, 5, 20], 15);
console.log(pair2); // --> [10, 5]

var pair3 = findPairForSum([1, 2, 3], 10);
console.log(pair3); // --> []