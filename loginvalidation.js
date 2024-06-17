
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var submitError=document.getElementById('submit-error');


// function to validate email 
function emailvalid(){
    var email =document.getElementById('contact-email').value;
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
// function to validate password 
function passwordvalid(){
    var password =document.getElementById('contact-password').value;
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

// function to validate form 
function validate()
{
    if( !emailvalid() || !passwordvalid()){
        submitError.style.display = 'block';
        submitError.innerHTML='Please fix error to sign in';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;

    }
    else{
        // alert("login successfully!!!");
            document.location.href = "home.html"
            alert("Sign in successfully!!!");
    }
}






























// function validForm(){

//     var name=document.custom_form.name;
//     var email=document.custom_form.email;
//     var message=document.custom_form.message;
//     if(name.value=="" || !name.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
//        name.nextElementSibling.style.display="block";
//        name.style.border="1px solid #f00";
//       return false
//     }
//     else
//     {
//     name.nextElementSibling.style.display="none";
//        name.style.border="1px solid transparent";
//    }
//     if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value==""){
//        email.nextElementSibling.style.display="block";
//       email.style.border="1px solid #f00";
//       return false;
//     }
//    else
//     {
//     email.nextElementSibling.style.display="none";
//       email.style.border="1px solid transparent";
//     }
//     if(name.value==""){
//       message.nextElementSibling.style.display="block";
//        message.style.border="1px solid #f00";
//        return false;
//     }
//     else
//     {
//     name.nextElementSibling.style.display="none";
//        name.style.border="1px solid transparent";
//     }


//    }









// function setError(input,message){
//     input.style.border="1px solid red";
//     const formcontrol=input.parentElement;
//     const small=formcontrol.querySelector("small");
//     small.className = "smallshown";
//     small.innerHTML = message;
// }
// function setSuccess(input){
//     input.style.border="2px solid green";
//     const formcontrol=input.parentElement;
    
//     const small=formcontrol.querySelector("small");
//     small.className= "smallhidden";
//     small.innerHTML="";
// }
// function emailvalid()
// {
//     let email=document.getElementById("username");
//     if(email.value.trim()===""){
//         setError(email,"Empty email address");

//     }
//     else if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
//     { 
//         setError(email,"Email address is not valid");
//     }
//     else{
//         setSuccess(email);
//     }
// }