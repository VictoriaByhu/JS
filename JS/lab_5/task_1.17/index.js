function isIsogram(str) {
  
  let seenLetters = new Set();

  let lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let letter = lowerCaseStr[i];

    if (seenLetters.has(letter)) {
      return false;
    }

    seenLetters.add(letter);
  }

  return true;
}

// --- Приклади ---
console.log("Тест 'isogram':", isIsogram("isogram")); // --> true
console.log("Тест 'hello':", isIsogram("hello")); // --> false
console.log("Тест 'Subdermatoglyphic':", isIsogram("Subdermatoglyphic")); // --> true
console.log("Тест 'moOse':", isIsogram("moOse")); // --> false (через 'o' та 'O')