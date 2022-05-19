// Assignment Code
var generateBtn = document.querySelector("#generate");
var userCriteria;
var userLen;
var cl;
var cu;
var cn;
var cs;
var passChar="";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Adding prompts for password criteria
generateBtn.addEventListener("click", function ()
{
  userCriteria=window.prompt("Please select your password criteria (enter A or B). \nCriteria A may include a-z, A-Z, 0-9, no spaces and !#$%&()* \nCriteria B may include a-z, A-Z, 0-9, no spaces, +-<=>?@_{|}~");
  if (userCriteria==="A" || userCriteria==="B")
  { 
    alert("Your choice is "+userCriteria)
    userLen=passLength();
    if(userLen>=8 && userLen<=128)
      { 
        alert("Length will be "+userLen);
        cl=passLower(); 
        if(cl==="Y" || cl==="N") 
        {
         cu=passUpper();
         if(cu==="Y" || cu==="N")    
          { 
           cn=passNumeric();
           if(cn==="Y" || cn==="N")
           {
            cs=passSpecial();
            if(cs==="Y" || cs==="N")
              {
                alert ("You have chosen: \nLowercase "+ cl + "\nUppercase " + cu + "\nNumeric " + cn + "\nSpecial characters " +cs);
                if (cl==="N" && cu==="N" && cn==="N" && cs==="N")  /*validating that user has selcted at least one character type*/
                {
                  alert("Invalid choice. At least one character type is required.");
                  return;
                }
                else
                {
                  passChar=checkInput();
                  writePassword();
                }
              }
            else
              {
                alert("You have either clicked cancel or entered an invalid input");
                return;
              }
           }
           else
           {
            alert("You have either clicked cancel or entered an invalid input");
            return;
           }
          }
         else
          {
          alert("You have either clicked cancel or entered an invalid input");
          return;
          }
        }
         
        else
        {
         alert("You have either clicked cancel or entered an invalid input");
         return;
        }

      }
    else
      {
        alert("You have either clicked cancel or entered an invalid input");
        return;
      }
  }
  else
  {
     alert("You have either clicked cancel or entered an invalid input");
     return;
  }
  
});  
  
    
//function to input length of password from user
function passLength()
{ var len =window.prompt("Enter length of password (must be between 8-128 characters):");
 return len;
}

//function to check if user wants to include lowercase letters
function passLower()
{
var c1 = window.prompt("Do you want to include lowercase letters (Y/N)?");
return c1;
}

//function to check if user wants to include uppercase letters
function passUpper()
{
var c2 = window.prompt("Do you want to include uppercase letters (Y/N)?");
return c2;
}

//function to check if user wants to include numeric 0-9
function passNumeric()
{
var c3 = window.prompt("Do you want to include numeric (Y/N)?");
return c3;
}

//function to check if user wants to include special characters
function passSpecial()
{
var c4 = window.prompt("Do you want to include special characters (Y/N)?");
return c4;
}

//function to check user input for the required character types and return the main string that will be used to generate password
function checkInput()
{

if (userCriteria === "A")  //user criteria A
{
  
      if (cl==='Y' && cu==="Y" && cn==="Y" && cs==="Y")
      {
       return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*";
      }
        
      else if (cl==='Y' && cu==="Y" && cn==="Y" && cs==="N")
      {
       return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      } 
      else if (cl==='Y' && cu==="Y" && cn==="N" && cs==="N")
      {
       return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (cl==='Y' && cu==="N" && cn==="N" && cs==="N")
      {
       return "abcdefghijklmnopqrstuvwxyz";
      }
      else if (cl==='N' && cu==="Y" && cn==="Y" && cs==="Y")
      {
       return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*";
      }
      else if (cl==='Y' && cu==="N" && cn==="Y" && cs==="N")
      {
       return "abcdefghijklmnopqrstuvwxyz0123456789";
      }
      else if (cl==='N' && cu==="Y" && cn==="N" && cs==="Y")
      {
       return "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*";
      }
      else if (cl==='Y' && cu==="N" && cn==="Y" && cs==="Y")
      {
       return "abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*";
      }
      else if (cl==='Y' && cu==="Y" && cn==="N" && cs==="Y")
      {
       return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*";
      }
      else if (cl==='N' && cu==="Y" && cn==="Y" && cs==="N")
      {
       return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      }
      else if (cl==='Y' && cu==="N" && cn==="N" && cs==="Y")
      {
       return "abcdefghijklmnopqrstuvwxyz!#$%&()*";
      }
      else if (cl==='N' && cu==="Y" && cn==="N" && cs==="N")
      {
       return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (cl==='N' && cu==="N" && cn==="Y" && cs==="Y")
      {
       return "0123456789!#$%&()*";
      }
      else if (cl==='N' && cu==="N" && cn==="N" && cs==="Y")
      {
       return "!#$%&()*";
      }
      else if (cl==='N' && cu==="N" && cn==="Y" && cs==="N")
      {
       return "0123456789";
      }
  
}

else     //user criteria is B
{
  if (cl==='Y' && cu==="Y" && cn==="Y" && cs==="Y")
  {
   return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-<=>?@_{|}~";
  }
    
  else if (cl==='Y' && cu==="Y" && cn==="Y" && cs==="N")
  {
   return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } 
  else if (cl==='Y' && cu==="Y" && cn==="N" && cs==="N")
  {
   return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (cl==='Y' && cu==="N" && cn==="N" && cs==="N")
  {
   return "abcdefghijklmnopqrstuvwxyz";
  }
  else if (cl==='N' && cu==="Y" && cn==="Y" && cs==="Y")
  {
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-<=>?@_{|}~";
  }
  else if (cl==='Y' && cu==="N" && cn==="Y" && cs==="N")
  {
   return "abcdefghijklmnopqrstuvwxyz0123456789";
  }
  else if (cl==='N' && cu==="Y" && cn==="N" && cs==="Y")
  {
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ+-<=>?@_{|}~";
  }
  else if (cl==='Y' && cu==="N" && cn==="Y" && cs==="Y")
  {
   return "abcdefghijklmnopqrstuvwxyz0123456789+-<=>?@_{|}~";
  }
  else if (cl==='Y' && cu==="Y" && cn==="N" && cs==="Y")
  {
   return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-<=>?@_{|}~";
  }
  else if (cl==='N' && cu==="Y" && cn==="Y" && cs==="N")
  {
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }
  else if (cl==='Y' && cu==="N" && cn==="N" && cs==="Y")
  {
   return "abcdefghijklmnopqrstuvwxyz+-<=>?@_{|}~";
  }
  else if (cl==='N' && cu==="Y" && cn==="N" && cs==="N")
  {
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (cl==='N' && cu==="N" && cn==="Y" && cs==="Y")
  {
   return "0123456789+-<=>?@_{|}~";
  }
  else if (cl==='N' && cu==="N" && cn==="N" && cs==="Y")
  {
   return "+-<=>?@_{|}~";
  }
  else if (cl==='N' && cu==="N" && cn==="Y" && cs==="N")
  {
   return "0123456789";
  }

}
}

//function for generating password
function generatePassword()
{
var pass="";
 for (var i = 0; i < userLen; i++)
 {   
   pass += passChar.charAt(Math.floor(Math.random() * passChar.length));
   
 }
 return pass;
}
  
 
 



