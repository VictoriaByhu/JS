function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let shortestLength = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    let currentLength = arr[i].length;

    if (currentLength < shortestLength) {
      shortestLength = currentLength;
    }
  }

  return shortestLength;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output);