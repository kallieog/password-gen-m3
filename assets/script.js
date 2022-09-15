// Assignment Code
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var speacialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "|", ";", ":", ",", ".", "?", "<", ">"]
var numbersArray = [0, 1, 2, 3];
var totalArray = []
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passLength = window.prompt("How long would you like your password to be?");
  var newLength = window.parseInt(passLength)
  if (newLength < 8 || newLength > 128 || isNaN(newLength)) {
    window.alert("Please select a valid length.")
    return "Please try again";
  }
  var isLower = window.confirm("Would you like lowercase letters?")
  var isUpper = window.confirm("Would you like uppercase letters?")
  var isSpecial = window.confirm("Would you like special characters?")
  var isNumber = window.confirm("Would you like to use numbers?")
  if (isLower) {
    totalArray = totalArray.concat(lowerArray)
  };
  if (isUpper) {
    totalArray = totalArray.concat(upperArray)
  }
  if (isSpecial) {
    totalArray = totalArray.concat(speacialArray)
  }
  if (isNumber) {
    totalArray = totalArray.concat(numbersArray)
  }
  if (totalArray.length === 0) {
    window.alert("Please select valid character type")
    return "Please try again"
  }
  var password = ""
  for (var i = 0; i < newLength; i++) {
    var index = Math.floor(Math.random() * totalArray.length);
    var digit = totalArray[index]
    password += digit
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);