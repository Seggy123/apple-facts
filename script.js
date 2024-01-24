// Question 1 -------------------------------------

let device = document.querySelector("#device");


let launch = document.querySelector("#launch");
let result = document.querySelector("#result");
launch.addEventListener("click", writeStory, false);

function writeStory() {
    
let lowercasetext = device.value.toLowerCase();
  
    if (lowercasetext === "iphone") {
        result.innerHTML = "Correct";
        console.log("Correct!")
    } else {
        result.innerHTML = "False :(";
        console.log("False...")
    }
}

// QUESTION 2 --------------------------------------

let device2 = document.querySelector("#device2");
let launch2 = document.querySelector("#launch2");
let result2 = document.querySelector("#result2");

launch2.addEventListener("click", writeStory2, false);

function writeStory2() {
    
let lowercasetext = device2.value.toLowerCase();
    if (lowercasetext === "apple 1") {
        result2.innerHTML = "Correct";
        console.log("Correct!")
    } else {
        result2.innerHTML = "False :(";
        console.log("False...")
    }
}

//  QUESTION 3 -------------------------------------

let device3 = document.querySelector("#device3");
let launch3 = document.querySelector("#launch3");
let result3 = document.querySelector("#result3");

launch3.addEventListener("click", writeStory3, false);

function writeStory3() {
    
let lowercasetext = device3.value.toLowerCase();
    if (lowercasetext === "steve jobs") {
        result3.innerHTML = "Correct";
        console.log("Correct!")
    } else {
        result3.innerHTML = "False :(";
        console.log("False...")
    }
}