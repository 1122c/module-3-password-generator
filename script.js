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
for (let i = 48; i <= 57; i++) {
  numbers.push(String.fromCharCode(i));
}

var special = ["#", "@", "$"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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
  var confirmNumbers = window.confirm(
    "do you want to use numbers in your password?"
  );
  var confirmSpecial = window.confirm(
    "do you want to use special characters in your password?"
  );

  if (confirmLowerCase) {
    chosenCharacters = chosenCharacters.concat(lowercase);
  }
  if (confirmUpperCase) {
    chosenCharacters = chosenCharacters.concat(uppercase);
  }
  if (confirmNumbers) {
    chosenCharacters = chosenCharacters.concat(numbers);
  }
  if (confirmSpecial) {
    chosenCharacters = chosenCharacters.concat(special);
  }

  if (chosenCharacters.length === 0) {
    window.alert("please choose one character type");
    return generatePassword();
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenCharacters.length);
    finalPassword += chosenCharacters[randomIndex];
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
