// function to select cities based on the state selected for state dropdown list 
function cities()
{
    var stateDropdown=document.getElementById("state");
    var cityDropdown=document.getElementById("city");
    cityDropdown.innerHTML="";
    var selected=stateDropdown.value;
    var citynames={
        "Kerala":["Kottayam","Ernakulam","Kollam","Palakad","Kannur"],
        "Tamil nadu":["Coimbatore","Salem","Theni","Erode","Thanjavur"],
        "Karnataka":["Hassan","Kaveri","Mysuru","Udupi","Ballari"]
    };
    var cityOptions=citynames[selected];
    for( var i=0; i< cityOptions.length;i++){
        var option=document.createElement("option");
        option.text=cityOptions[i];
        cityDropdown.add(option);
    }
}
























// function formvalid(){

//     var p=/^[6789][0-9]{9}$/;
//     var email=document.getElementById('email').value;
//     var pass=document.getElementById('pass').value;
//     var password=document.getElementById('password').value;
//     var count=0;



//     if(!(phone.match(p))){
//    document.getElementById('s1').innerHTML="<b>Invalid Mobile Number</b>";
//    count++;
//    }


//     if(pass.length<8)
//     {
//     document.getElementById('s2').innerHTML="<b>Password should be greater than 8 char</b>";
//     count++;
//     }


//    if(pass!=password){
//    document.getElementById('s3').innerHTML="<b>Password should be same</b>";
//    count++;
//    }


//    var pattern=/[a-z0-9]+[-_.+]?[a-z0-9]+[@][a-z0-9]+[-_]?[a-z0-9]+[.][a-z]{2,3}/;
//  //var pattern=/^[a-z0-9]+[_+-.]?[a-z0-9]+[@][a-z0-9]+[-_]?[a-z0-9]+[.][a-z]{2.3}$/;
//   if(!(email.match(pattern))){
//    document.getElementById('s4').innerHTML="<b>Invalid E-mail</b>";
//    count++;
//    }


//    if(count==0)
//    {
//    return true;
//    }
//     else
//     {
//     return false;
//     }
// }