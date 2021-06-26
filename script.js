var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','n','m','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9']
var specialLetter = ['!','@','$']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  

  passwordText.value = password;

}
  
function generatePassword(){
  var length = parseInt(prompt("how long would you like your password?"));
  console.log(length)
  //condition gate
  if(length < 8 || length > 128 || isNaN(length)) {
    alert('invaild length')
    return generatePassword();
  }
  


  var includeLower = confirm('would you like to include lower case ? ');
  var includeUpper = confirm('would you like to include upper case?');
  var includeNumber = confirm('would you like to include numbers?');
  var includeSpecialLetter = confirm('would you like to include special letter?');
  if( includeLower === false &&
      includeUpper === false &&
      includeNumber === false &&
      includeSpecialLetter === false ){
     return alert('invaild');
   }


  var pot = [];
  var finalPassword= "";
  if( includeLower === true){
    pot = pot.concat(lowercase);
  }

if(includeUpper){
  pot += uppercase
}

if(includeNumber){
  pot += numbers
}

if(includeSpecialLetter){
  pot += specialLetter
}
console.log(pot);

for ( let i = 0 ; i < length; i++ ){
  var index = Math.floor(Math.random()*pot.length)
  var temp = pot[index]
  finalPassword += temp

}
return finalPassword;

}






 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 