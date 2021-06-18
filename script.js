


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var number = generatenumbers("1","2","3","4","5","6","7","8","9");
  var passwordText = document.querySelector("a","b", "c","d","e");
  var index = Math.floor(Math.random() * options.length);

  passwordText.value = password;

}
  

function cap_letters() {

  var userChoice = window.comfirm("would you like any cap letters");

  if (comfirm()){
    userChoice = userChoice.toUpperCase();
    number();
  } else {
   number();
  }
}
  
  function number(){
      if(comfirm()){
        var computerChoice = passwordText[index]
        start();
      } else {
      start();
      }

  }

  



function start(){
  console.log("welcome")
    writePassword();
}
    

 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 