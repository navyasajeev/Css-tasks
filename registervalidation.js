var firstError = document.getElementById('firsterror');
var secondError = document.getElementById('seconderror');
var phoneError = document.getElementById('phoneerror');
var dateError = document.getElementById('dateerror');
var genderError = document.getElementById('gendererror');
var line1Error = document.getElementById('line1error');
var line2Error = document.getElementById('line2error');
var stateError = document.getElementById('stateerror');
var emailError = document.getElementById('emailerror');
var usernameError = document.getElementById('usernameerror');
var passwordError = document.getElementById('passworderror');
var confirmError = document.getElementById('confirmpassworderror');
var registerError = document.getElementById('registererror');

function validateName()
{
    var name = document.getElementById('firstname').value;
    if(name.length == 0){
        firstError.innerHTML = 'first name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+$/))
        
        { 
        firstError.innerHTML = 'Firstname must be alphabets without spaces';
        return false;
        }
        firstError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
function validateLast()
{
    var lastname = document.getElementById('lastname').value;
    if(lastname.length == 0){
        secondError.innerHTML = 'last name is required';
        return false;
    }
    if(!lastname.match(/^[a-zA-Z]+$/))
        
        { 
        secondError.innerHTML = 'Lastname must be alphabets without spaces';
        return false;
        }
        secondError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
function validatePhone()
{
    var phone = document.getElementById('phoneNumber').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone Number is required';
        return false;
    }
    if(!phone.match(/^[6789][0-9]{9}$/))
        
        { 
        phoneError.innerHTML = 'Phone number is invalid';
        return false;
        }
        phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}

// function validateDate()
// {
//     var date = document.getElementById('date').value;
//     if(date.length == 0){
//         dateError.innerHTML = 'Date of birth is required';
//         return false;
//     }
//     if(!date.match(/^[6789][0-9]{9}$/))
        
//         { 
//         phoneError.innerHTML = 'Phone number is invalid';
//         return false;
//         }
//         dateError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
//         return true;
// }
function validateGender()
{
    var gender = document.getElementById('gender').value;
    if(gender.length == 0){
        genderError.innerHTML = 'Gender is required';
        return false;
    }
    
        genderError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}

function validateLine1()
{
    var address1 = document.getElementById('line1').value;
    if(address1.length == 0){
        line1ErrorError.innerHTML = 'Address is required';
        return false;
    }
    if(!address1.match(/^[a-zA-Z]+.{5,}$/))
        
        { 
        line1Error.innerHTML = 'Address is invalid';
        return false;
        }
        line1Error.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
function validateLine2()
{
    var address2 = document.getElementById('line2').value;
    if(address2.length == 0){
        line2ErrorError.innerHTML = 'Address is required';
        return false;
    }
    if(!address2.match(/^[a-zA-Z]+.{5,}$/))
        
        { 
        line2Error.innerHTML = 'Address is invalid';
        return false;
        }
        line2Error.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
function validateEmail(){
    var email =document.getElementById('emailaddress').value;
    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        { 
        emailError.innerHTML="Email is invalid";
        return false;
        }
        emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validatePassword(){
    var password =document.getElementById('password').value;
    if(password.length == 0){
        passwordError.innerHTML='Password is required';
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
        { 
        passwordError.innerHTML="Should 8 characters long with one uppercase and one lowercase ";
        return false;
        }
        
        
        passwordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validateUsername(){
    var username =document.getElementById('username').value;
    if(username.length == 0){
        usernameErrorError.innerHTML='Username is required';
        return false;
    }
    if(!username.match(/^[0-9A-Za-z]+.{6,}$/))
        { 
        usernameError.innerHTML="Should atleast 6 characters long with only numbers and digits ";
        return false;
        }
        
        
        passwordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}


// function validateMessage(){
//     var message = document.getElementById('contact-message').value;
//     var required = 20;
//     var left = required - message.length;
//     if(left > 0){
//         messageError.innerHTML=left + 'more characters required ';
//         return false;
//     }
//     messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
//     return true;
// }
// function validateForm()
// {
//     if(!validateName() || !validateEmail() || !validateMessage()){
//         submitError.style.display='block';
//         submitError.innerHTML='Please fix error to submit';
//         setTimeout(function(){submitError.style.display = 'none';}, 3000);
//         return false;

//     }
//     else{
//         alert("Message send successfully!!!");
//     }
// }
