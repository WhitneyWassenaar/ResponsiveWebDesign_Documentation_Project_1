//CHANGING H2 HEADING TEXT INTO AN ALTERNATIVE TEXT: "Hello World"
// Store a reference to the <h2> in a variable
let myHeading = document.querySelector("h2");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";



//CHANGING IMAGE WHEN CLICKING ON THE IMAGE
let myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Kiger_Mustangs.jpg") {
    myImage.setAttribute("src", "images/spirit.jpg");
  } else {
    myImage.setAttribute("src", "images/corrolla.jpg");
  }
});

//NOTES
/* I have to dive into these subjects to understand JavaScript better:
    - API [Web Storage API]
    - Events
    - Functions
    - Conditionals
*/ 


// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}