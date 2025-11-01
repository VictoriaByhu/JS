
function areMirrorStrings(str1, str2) {
  
  if (str1.length !== str2.length) {
    return false;
  }

  let combinedStr = str1 + str1;


  return combinedStr.includes(str2);
}

var string1 = 'hello world';
var string2 = 'orldhello w';
var output = areMirrorStrings(string1, string2);
console.log(output); // --> true

// --- Додаткові тести ---
var output2 = areMirrorStrings('abcde', 'cdeab');
console.log("Тест ('abcde', 'cdeab'):", output2); // --> true

var output3 = areMirrorStrings('abcde', 'abced');
console.log("Тест ('abcde', 'abced'):", output3); // --> false