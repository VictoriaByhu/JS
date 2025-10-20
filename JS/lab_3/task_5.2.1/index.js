function getProperty(obj, propName) {
    return obj[propName];
}

var obj = {
    key: "value"
};

var output = getProperty(obj, 'key');

document.getElementById("result").textContent = output;

console.log(output);