// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowercase = ["a","b","c"]
var uppercase = ['A',"B","C"]
var numbers = ["1", "2", "3"]
var special = ["#", "@", "$"]

var chosenCharacters = []
var finalPassword =[]
function generatePassword() {
  // takes user input value 
  var passwordLength = window.prompt("how long would you like your password to be? password must be between 8-128 characters")

  var confirmLowerCase = window.confirm("do you want lowercase letters in your password?")
  var confirmUpperCase = window.confirm("do you want uppercase letters in your password?")
  var numbers = window.confirm("do you want to use numbers in your password?")
  var special = window.confirm("do you want to use special characters in your password?")

if (confirmLowerCase === true) {
  chosenCharacters = chosenCharacters.concat (lowercase)
}
// as above for other character types





console.log(chosenCharacters)
// loop oer chosenCharacters array for as many times as the user answers for passwordLength and push random chacter from chasenCharacters into finalPassword array


// insert joined finalPAssword array over "hello"
  return "hello"
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);