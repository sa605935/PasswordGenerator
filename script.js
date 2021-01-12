// Declare a variable and assign it a value
var generateBtn = document.querySelector("#generate");
var passwordCharacters = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;

//  Ask user for password criteria, store in variables, create an object, return object
function passwordQuestions() {
    resetApp();
    passwordLength = prompt('How long would you like your password to be? Choose a number between 8 - 128.');
    uppercaseLetters = confirm('Would you like uppercase letters?');
    lowercaseLetters = confirm('Would you like lowercase letters?');
    numbers = confirm('Would you like numbers?');
    specialCharacters = confirm('Would you like special characters?');
  
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
      alert('Your selected password length has to be at least 8 characters and no more than 128.');
      passwordQuestions();
    }
  
    if (!uppercaseLetters && !lowercaseLetters && !numbers && !specialCharacters) {
        alert('Please select at least one character type to include in your password.');
        passwordQuestions();
    }
  
    var options = {
       passwordLength: passwordLength,
       uppercaseLetters: uppercaseLetters,
       lowercaseLetters: lowercaseLetters,
       numbers: numbers,
       specialCharacters: specialCharacters}
  
    return options;
  }
  
// if statements to add chosen arrays to passwordCharacters array, for loop to choose random letter for user preferences length
function generatePassword() {
    var options = passwordQuestions();
  
    if (options.uppercaseLetters) {
      passwordCharacters = passwordCharacters.concat(uppercaseLettersArray);
    }
  
    if (options.lowercaseLetters) {
      passwordCharacters = passwordCharacters.concat(lowercaseLettersArray);
    }
  
    if (options.numbers) {
      passwordCharacters = passwordCharacters.concat(numbersArray);
    }
  
    if (options.specialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharactersArray);
    }
  
    var password = "";
  
    for (var i = 0; i < options.passwordLength; i++) {
        var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        password = password + randomCharacter;
    }
    
    return password;
  } 
  
 // Write password to the #password input
function writePassword() {
    var password = generatePassword(); //gp => func 
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  } 