var textarea = document.getElementById('password');
var disabledBtn = document.getElementById('copy');
var generateBtn = document.getElementById('generate');

function removeClass() {
    document.getElementById("copy").removeAttribute("disabled");
    if (disabledBtn.classList.contains('disabled')){
        disabledBtn.classList.remove('disabled');
    }
}


generateBtn.addEventListener('click', function(){
    var passwordLength = prompt('How many characters?');
    var specialCharacters = confirm('Include special characters?');
    var numericCharacters = confirm('Include numbers?');
    var upperCaseCharacters = confirm('Include upper case characters');
    var lowerCaseCharacters = confirm('Include lower case characters');
    var characterPool = "";
    var password = "";
    
    textarea.value = '';
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
    removeClass();
});

disabledBtn.addEventListener('click', function() {
    textarea.select();
    document.execCommand('copy');
    alert('copied to clipboard');
})


