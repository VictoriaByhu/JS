function getFullName(firstName, lastName) {
    return firstName + " " + lastName; 
}


var output = getFullName('Joe', 'Smith');

console.log(output);

document.getElementById("result").textContent = output;
