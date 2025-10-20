function removeProperty(obj, propName) {
    delete obj[propName];
}

var obj = {
    name: 'Sam',
    age: 20
};

removeProperty(obj, 'name');

console.log(obj.name);

document.getElementById("result").textContent = obj.name;
