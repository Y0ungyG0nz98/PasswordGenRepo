// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
let selectedArray = [];

let lowercaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let otherChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '<', '>', '{', '}', '[', ']', '~', '/', '|', '?', '_', '-', ';', ':', ',', '.'];

let charNum = window.prompt('How long would you like your password to be? Choose no more than 128 values.').split(',');

let password = '';
for (let i = 0; i < 128; i++) {
    password += charNum;
}

let charTypes = window.prompt('Which type of characters do you want in your password?');

if (lowercaseAlpha) {
    selectedArray = [...lowercaseAlpha]
}

let randomChar = Math.floor(Math.random()*passwordChars.length)


function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// password values 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) + = < > { } [ ] ~ / | ? _ - ; : , .'

// passwordChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '<', '>', '{', '}', '[', ']', '~', '/', '|', '?', '_', '-', ';', ':', ',', '.'];

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=<>{}[]~/|?_-;:,.