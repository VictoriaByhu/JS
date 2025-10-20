function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height; 
}

var output = computeAreaOfATriangle(4, 6);

console.log(output);
document.getElementById("result").textContent = output;
