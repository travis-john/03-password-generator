var textarea = document.getElementById('password');
var disabledBtn = document.getElementsByClassName('disabled');

document.getElementById('generate').addEventListener('click', function(){
    var passwordLength = prompt('How many characters?');
    var specialCharacters = confirm('Include special characters?');
    var numericCharacters = confirm('Include numbers?');
    var upperCaseCharacters = confirm('Include upper case characters');
    var lowerCaseCharacters = confirm('Include lower case characters');
    var characterPool = "";
    var password = "";
    
    if (specialCharacters) {
        specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        characterPool += specialCharacters;
    }
    if (numericCharacters) {
        numericCharacters = '0123456789';
        characterPool += numericCharacters;
    }
    if (lowerCaseCharacters) {
        lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        characterPool += lowerCaseCharacters;
    }
    if (upperCaseCharacters) {
        upperCaseCharacters = lowerCaseCharacters.toUpperCase();
        characterPool += upperCaseCharacters;
    }
    console.log(characterPool);
    
    for(var i = 0; i <  passwordLength; i ++){
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    
    textarea.value += password;
});


