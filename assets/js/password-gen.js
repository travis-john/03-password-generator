// global variables
var textarea = document.getElementById('password');
var disabledBtn = document.getElementById('copy');
var generateBtn = document.getElementById('generate');

// copy to clipboard button is disabled on page load - checking to see if disabled and removing this attribute and class
function removeClass() {
    disabledBtn.removeAttribute("disabled");
    if (disabledBtn.classList.contains('disabled')){
        disabledBtn.classList.remove('disabled');
    }
}

// password generator function
generateBtn.addEventListener('click', function(){

//     clearing out textarea when the user clicks generate password button
    textarea.value='';

//     function variables
    var passwordLength = prompt('How many characters?');
    var specialCharacters = confirm('Include special characters?');
    var numericCharacters = confirm('Include numbers?');
    var upperCaseCharacters = confirm('Include upper case characters');
    var lowerCaseCharacters = confirm('Include lower case characters');
    var characterPool = "";
    var password = "";

//     accounting for a passwordLength less than 8 numericCharacters
    if (passwordLength < 8) {
      alert('Password must be at least 8 characters');
      passwordLength = prompt('How many characters?');
    }
//     accounting for passwordLength more than 128 characters
    if (passwordLength > 128){
      alert('Password must be less than 128 characters');
      passwordLength = prompt('How many characters');
    }

//     confirming special characters and adding them to characterPool
    if (specialCharacters) {
        specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        characterPool += specialCharacters;
    }

//     confirming numbers and adding them to characterPool
    if (numericCharacters) {
        numericCharacters = '0123456789';
        characterPool += numericCharacters;
    }

//     confirming lower case characters and adding them to characterPool
    if (lowerCaseCharacters) {
        lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        characterPool += lowerCaseCharacters;
    }

//     confirming upper case characters and adding them to characterPool
    if (upperCaseCharacters) {
        upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        characterPool += upperCaseCharacters;
    }

//     publishing selected characterPool to the console for confirmation and debugging
    console.log(characterPool);

//     parsing characterPool string after a random number is generated and adding to password based on number of passwordLength
    for(var i = 0; i <  passwordLength; i ++){
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }

//     publishing password string to the textarea
    textarea.value += password;

//     running the removeClass function to see if copy button is disabled - if so, removing class and attribute
    removeClass();
});

// copy to clipboardfunction
disabledBtn.addEventListener('click', function() {

//     selecting text in textarea
    textarea.select();

//     copying password to clipboard
    document.execCommand('copy');

//     confirmation that password has been copied to clipboard
    alert('copied to clipboard');
});
