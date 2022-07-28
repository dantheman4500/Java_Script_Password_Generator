  // Assignment Code
  var generateBtn = document.querySelector("#generate");
// coousing random numbers 
  function randon_Number(min , max){
    if(!max){
      max = min 
      min = 0
    }
    var random_int = Math.random()
      return Math.floor(min*(1 - random_int) + random_int*max)
    
  };
  function random_list_item(list){
    return list[randon_Number(0, list.length - 1)]
  }

// Writing out password in the DOM
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


  // event listener to generate button
generateBtn.addEventListener("click", writePassword);


  // Write password to the #password input
  function generatePassword(){

    var length_answer= prompt(" Password length must be between 8 and 128 charter long",);
  
    var Password_length = parseInt(length_answer);
  
   // Checking if the answer given Above is a Number 
    if(isNaN(Password_length)){
      alert("please enter a number ONLY!!!")
      return
    };
    if(Password_length <=8  ||  Password_length >= 128){
      alert("PASSWORD LENGTH MUST BE BETWEEN 8 AND 128 CHARTER LONG !!!!")
      return generatePassword() ;
    };
  // popup promops asking for other password citeras  
    var password_has_number = confirm( " Would you like number in your password?")
    var password_has_characters = confirm( " Would you like your password with characters?")
    var password_has_uppercase = confirm( " Would you like your password with Uppercase letters?")
    var password_has_lowercase = confirm( " Would you like your password with Lowercase letters?")
  
    // array of otions to choose for the password
    var password_number = [0,1,2,3,4,5,6,7,8,9];
    var password_characters  = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
    var uppercase_letter = []
    var lowercase_letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    
    // Answer choosen so this decided what goes into the password_choices
  
    // turning lowercase letters uppercase
    for(var i = 0; i < lowercase_letter.length; i++){
      uppercase_letter[i] = lowercase_letter[i].toUpperCase()
    }
    var password_choices = []
    
    if (password_has_number) {
      password_choices.push(password_number)
    }
  
    if (password_has_characters) {
      password_choices.push(password_characters)
    }
  
    if (password_has_uppercase) {
      password_choices.push(uppercase_letter)
    }
  
    if (password_has_lowercase === true) {
      password_choices.push(lowercase_letter)
    }

    if(password_choices.length === 0){
      alert("please select one password criteria ")
      return writePassword ();
    }
    var generatePassword ="";
    
    // Getts A randondom  listed item from the  password choices array
    
    for(var i = 0 ; i < Password_length; i++){
      var random_list =  random_list_item(password_choices)
      var random = random_list_item(random_list)
      generatePassword += random
    }

    return generatePassword

  }

  


