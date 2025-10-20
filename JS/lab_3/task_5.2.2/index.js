function addProperty(obj, propName) {
    obj[propName] = true;
    return obj[propName];
}

var myObj = {};
addProperty(myObj, "myProperty");

console.log(myObj.myProperty);

document.getElementById("result").textContent = myObj.myProperty;
