function isPalindrome(word) {
  let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  let reversedWord = cleanedWord.split('').reverse().join('');

  return cleanedWord.length > 0 && cleanedWord === reversedWord;
}

function hasPalindromeWords(sentence) {
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    
    if (isPalindrome(words[i])) {
      return true;
    }
  }

  return false;
}

// --- Приклади ---
var output1 = hasPalindromeWords("This is a level, madam!");
console.log("Тест ('This is a level, madam!'):", output1); // --> true

var output2 = hasPalindromeWords("Hello world");
console.log("Тест ('Hello world'):", output2); // --> false

var output3 = hasPalindromeWords("A nut for a jar of tuna");
console.log("Тест ('A nut for a jar of tuna'):", output3); // --> true (через "A" та "a")