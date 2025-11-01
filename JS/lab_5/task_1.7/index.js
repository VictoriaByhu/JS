function getProductOfAllElementsAtProperty(obj, key) {
  let property = obj[key];
  if (property === undefined) {
    return 0;
  }

  if (Array.isArray(property) === false) {
    return 0;
  }


  if (property.length === 0) {
    return 0;
  }

  let product = 1;

  for (let i = 0; i < property.length; i++) {
    let number = property[i];
    product = product * number;
  }

  return product;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

// --- Тест на правило "немає ключа" ---
var obj2 = { otherKey: [1, 2] };
console.log("Тест (немає ключа 'key'):", getProductOfAllElementsAtProperty(obj2, 'key'));

// --- Тест на правило "не масив" ---
var obj3 = { key: "це просто текст" };
console.log("Тест (не масив):", getProductOfAllElementsAtProperty(obj3, 'key'));

// --- Тест на правило "порожній масив" ---
var obj4 = { key: [] };
console.log("Тест (порожній масив):", getProductOfAllElementsAtProperty(obj4, 'key')); 