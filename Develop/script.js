// Assignment Code

// Function to present user with series prompts for password generation
function getPasswordPrompts() {
  // Variable to hold the user input's length of password
  var length = Number(
    prompt(
      'How many characters long (between 8 and 128 characters) would you like your new password to be?'
    )
  );

  //Checking to make sure input is between 8-128 characters
  //if any evaluate as true, user must restart and input a new option
  
  if (length.isNaN) {
    alert('Cannot input. Password input needs to be a number.');
    return null;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters long');
    return null;
  }

  else if (length > 128) {
    alert("Password must be at most 128 characters long");
    return null;
  }

  //Variables to confirm the password will contain different special prompts 
  //Stored as booleans depending on user input
  var withSpecialCharacters = confirm('Confirm if you would like your password to contain special characters.');

  var withLowerCaseCharacters = confirm('Confirm if you would like your password to contain lowercase characters.');

  var withUpperCaseCharacters = confirm('Confirm if you would like your password to contain uppercase characters.');
  
  var withNumericalCharacters = confirm('Confirm if you would like your password to contain numberical characters.');

  //Confirm the user's password will include at least one special prompt for anonymity.
  if (withSpecialCharacters === false && withLowerCaseCharacters === false && withUpperCaseCharacters === false && withNumericalCharacters === false) {
    alert('Sorry, password must contain at least one special criteria. Please select from the following');
    return null;
  }

  // Saving var pf user's password options 
  var passwordOptions = {
    length: length,
    withSpecialCharacters: withSpecialCharacters,
    withLowerCaseCharacters: withLowerCaseCharacters,
    withUpperCaseCharacters: withUpperCaseCharacters,
    withNumericalCharacters: withNumericalCharacters
  };

  return passwordOptions;
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
