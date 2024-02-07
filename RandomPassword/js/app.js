var inputPass = document.querySelector('.input-pass');
var copyBtn = document.getElementById('copy-btn');
var inputRange = document.querySelector('.input-range');
var inputRangeDisplay = document.querySelector(".range-display");
var generateBtn = document.querySelector('.generate-btn');
var copyText = document.querySelector(".copy-text");

var allCharacters = 'QdnfgdgsfgdsgsfsghmnDFDADGFfhujyftkhşlhjklWEGDSDSFVDS1234567890!&#^-+!$*"(){}[]?|\\';

function randomGeneratePassword() {
    var password = '';
    for (let index = 0; index < inputRange.value; index++) {
        var random = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[random];
    }
    inputPass.value = password;
}
inputRange.addEventListener('input', () => {
    inputRangeDisplay.innerText = inputRange.value;
});

inputRangeDisplay.innerText = inputRange.value;

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(inputPass.value);
    copyText.classList.add("active");
    setTimeout(() => {
        copyText.classList.remove("active");
    }, 2000);
})

generateBtn.addEventListener('click', randomGeneratePassword);
