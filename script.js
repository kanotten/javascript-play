// Variable function
const showPetNameTwo = function(name) {
    console.log("the pet name is: " + name);
}

const showPetName = (name) => {
    console.log("the pet name is: " + name);
}

const sum = (num1, num2) => {
    console.log(num1 + num2);
}

// Example usage of the sum function
sum(100, 200);

// Example usage of the showPetName and showPetNameTwo functions
showPetName("Fluffy");
showPetNameTwo("Buddy");
