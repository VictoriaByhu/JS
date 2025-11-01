function joinArrayOfArrays(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let innerArray = arr[i];
    newArray = newArray.concat(innerArray);
  }

  return newArray;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output); 