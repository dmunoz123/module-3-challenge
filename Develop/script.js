// Assignment Code

// Function to present user with series prompts for password generation

function getPasswordPrompts() {
  // Variable to hold the length
  var length = Number(
    prompt(
      "How many characters long (between 8 and 128 characters) would you like your new password to be?"
    )
  );
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
