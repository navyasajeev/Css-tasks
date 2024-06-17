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

// validation of firstname
function validateName()
{
    var name = document.getElementById('firstname').value;
    // check the firstname is empty
    if(name.length == 0){
        firstError.innerHTML = 'First name is required';
        return false;
    }
    // check whether the first name containes alphabets without spaces.
    if(!name.match(/^[a-zA-Z]+$/))
        
        { 
        firstError.innerHTML = 'Firstname must be alphabets without spaces';
        return false;
        }
        firstError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
// validation of last name 
function validateLast()
{
    var lastname = document.getElementById('lastname').value;
     // check the firstname is empty
    if(lastname.length == 0){
        secondError.innerHTML = 'Last name is required';
        return false;
    }
    // Check the last name match the pattern or not 
    if(!lastname.match(/^[a-zA-Z]+$/))
        
        { 
        secondError.innerHTML = 'Lastname must be alphabets without spaces';
        return false;
        }
        secondError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
// validation of phone number field
function validatePhone()
{
    var phone = document.getElementById('phoneNumber').value;
     // check the firstname is empty
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone Number is required';
        return false;
    }
    // Check the phone number match the pattern or not 
    if(!phone.match(/^[6789][0-9]{9}$/))
        
        { 
        phoneError.innerHTML = 'Phone number is invalid';
        return false;
        }
        phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
// validation of date field
function validateDate()
{     
    var today=new Date().toISOString().split('T')[0];
    document.getElementById("dateinput").setAttribute("max",today);
    // var date = document.getElementById('date').value;
    if(today.length == 0){
        dateError.innerHTML = 'Date of birth is required';
        return false;
    }
        dateError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
//validation of gender
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
// validation of address line1 field
function validateLine1()
{
    var address1 = document.getElementById('line1').value;
     // check the address field is empty
    if(address1.length == 0){
        line1Error.innerHTML = 'Address is required';
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
// validation of address line2 field
function validateLine2()
{
    var address2 = document.getElementById('line2').value;
    // check the address field is empty
    if(address2.length == 0){
        line2Error.innerHTML = 'Address is required';
        return false;
    }
    // check the address is valid or not 
    if(!address2.match(/^[a-zA-Z]+.{5,}$/))
        
        { 
        line2Error.innerHTML = 'Address is invalid';
        return false;
        }
        line2Error.innerHTML='<i class="fa-regular fa-circle-check"></i>';
       
        return true;
}
// validation of email
function validateEmail(){
    var email =document.getElementById('emailaddress').value;
    // check the email field is empty
    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
    }
    // check the email matches the pattern 
    if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        { 
        emailError.innerHTML="Email is invalid";
        return false;
        }
        emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}
// validation of password
function validatePassword(){
    var password =document.getElementById('password').value;
    // check the password field is empty
    if(password.length == 0){
        passwordError.innerHTML='Password is required';
        return false;
    }
    // check the password matches the pattern or not 
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
        { 
        passwordError.innerHTML="Should 8 characters long with one uppercase and one lowercase ";
        return false;
        }
        
        
        passwordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}
// validation of confirm password
function validateConfirm()
{
    var password =document.getElementById('password').value;
    var confirm =document.getElementById('confirm').value;
    // console(password.confirm);
    // check the confirm password field is empty
    if(confirm.length == 0){
        confirmError.innerHTML='Password is required';
        return false;
    }
    // check the both password are equal or not 
    if(confirm != password)
        { 
        confirmError.innerHTML="Password don't match ";
        return false;
        }
    
        confirmError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}
// validation of username 
function validateUsername(){
    var username =document.getElementById('username').value;
    // check the username field is empty
    if(username.length == 0){
        usernameErrorError.innerHTML='Username is required';
        return false;
    }
    // check the pattern matches the pattern or not 
    if(!username.match(/^[0-9A-Za-z]+.{6,}$/))
        { 
        usernameError.innerHTML="Should atleast 6 characters long with only numbers and digits ";
        return false;
        }     
        usernameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}

// validation of form according to the fields entered
function validateForm()
{
    // if all the fiels entered are not valid then display the error message 
    if(!validateName() || !validateLast() || !validatePhone() || !validateLine1() || !validateLine2() || !validateEmail() || !validatePassword() || !validateConfirm() || !validateUsername())
        {
        registerError.style.display='block';
        registerError.innerHTML='Please fix error to sign up';
        setTimeout(function(){registerError.style.display = 'none';}, 3000);
        return false;
    }
    else{
        // alert("Sign up successfully!!!");
        document.location.href = "login.html"
        alert("Sign up successfully!!!");
    }
}
