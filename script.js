// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", ">", "?", "@", "[", "]", "^", "{", "}", "~", "|"];


//Kick off criteria prompts by clicking "Generate Password"
generateBtn.addEventListener("click", writePassword);


//user prompts 
function generatePassword() {
  var chooseLength = prompt("How many characters would you like your password to be?");
  if (chooseLength < 8 || chooseLength > 128 || isNaN(chooseLength)) {
    alert("Password must be between 8-128 characters");
    return;
  }


  //user confirmations 
  alert("Please select the criteria you'd like your password to include.");
  var confirmLower = confirm("Include lowercase letters?");
  var confirmUpper = confirm("Include uppercase letters?");
  var confirmNumber = confirm("Include numbers?");
  var confirmCharacters = confirm("Include special characters?");


  if ((confirmLower == false) && (confirmUpper == false) && (confirmNumber == false) && (confirmCharacters == false)) {
    alert("Please select at least one option");
    return;
  };

  console.log(chooseLength, confirmLower, confirmUpper, confirmNumber, confirmCharacters);


var randomPool = [];
var passwordCombo = [];


  if (confirmLower) {
    randomPool = randomPool.concat(lowers)
    var randomLowers = lowers[Math.floor(Math.random() * lowers.length)];
    passwordCombo.push(randomLowers)
  }

  if (confirmUpper == true) {
    randomPool = randomPool.concat(uppers);
    var randomUppers = numbers[Math.floor(Math.random() * uppers.length)];
    passwordCombo.push(randomUppers)
  }

  if (confirmNumber) {
    randomPool = randomPool.concat(numbers);
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    passwordCombo.push(randomNumber)
  }

  if (confirmCharacters) {
    randomPool = randomPool.concat(characters);
    var randomCharacters = characters[Math.floor(Math.random() * characters.length)];
    passwordCombo.push(randomCharacters);
  }


  while (passwordCombo.length < chooseLength) {
    var randomBunch = randomPool[Math.floor(Math.random() * randomPool.length)];
    passwordCombo.push(randomBunch);
  }


  console.log(passwordCombo);
  console.log(randomBunch);
alert("Your password is " + passwordCombo.join(''));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}