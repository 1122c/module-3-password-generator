// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lowercase = [];
for (let i = 97; i <= 122; i++) {
  lowercase.push(String.fromCharCode(i));
}

var uppercase = [];
for (let i = 65; i <= 90; i++) {
  uppercase.push(String.fromCharCode(i));
}

var numbers = [];
for (let i = 48; i <= 57; i++) {}

var special = ["#", "@", "$"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var chosenCharacters = [];
var finalPassword = [];

function generatePassword() {
  var chosenCharacters = [];
  var finalPassword = "";

  // takes user input value
  var passwordLength = window.prompt(
    "how long would you like your password to be? password must be between 8-128 characters"
  );
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt(
      "invalid choice. please enter a number between 8 and 128."
    );
  }
  var confirmLowerCase = window.confirm(
    "do you want lowercase letters in your password?"
  );
  var confirmUpperCase = window.confirm(
    "do you want uppercase letters in your password?"
  );
  var numbers = window.confirm("do you want to use numbers in your password?");

  var special = window.confirm(
    "do you want to use special characters in your password?"
  );

  if (confirmLowerCase === true) {
    chosenCharacters = chosenCharacters.concat(lowercase);
  }
  if (confirmUpperCase === true) {
    chosenCharacters = chosenCharacters.concat(uppercase);
  }
  if (confirmNumbers === true) {
    chosenCharacters = chosenCharacters.concat(numbers);
  }
  if (confirmSpecial === true) {
    chosenCharacters = chosenCharacters.concat(special);
  }

  // as above for other character types

  console.log(chosenCharacters);
  // loop oer chosenCharacters array for as many times as the user answers for passwordLength and push random chacter from chasenCharacters into finalPassword array

  // insert joined finalPAssword array over "hello"
  return "hello";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
