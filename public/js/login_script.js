// function Validate(){
//     let user = document.getElementById("username");
//     let pass = document.getElementById("password");
//     return userCheck(user,pass,successLogin,errorLogin)
// }

// function userCheck(user,pass,successLogin,errorLogin){
//     if(user.value == "admin" && pass.value == "12345"){
//         return successLogin();
//     }
//     else{
//         return errorLogin();
//     }
// }
// function successLogin(){

//     return true;
// }
// function errorLogin(){
//     var errorLabel =  document.getElementById("error");
//     errorLabel.innerHTML = "Enter valid credentials!!"
//     errorLabel.style.color = "red"
//     errorLabel.removeAttribute("hidden",true);

//     return false;
// }

// function Typing(){
//     var errorLabel =  document.getElementById("error");
//      errorLabel.setAttribute("hidden",true);
// }

// /////////////////////////
// 

var useremail = document.getElementById('email1');
var pwd = document.getElementById('pwd');
var form = document.getElementById('form1');
var button = document.getElementById('login-button');
var errorLabel =  document.getElementById("error");
var flag_e = 0;
var flag_p = 0;

// var email = /^([A-Za-z0-9\.\-\_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var email = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

useremail.addEventListener('input', function validate_email()
{
        if(email.test(useremail.value))
        {
            useremail.style.color = "green";
            errorLabel.innerHTML = "Email is valid!!"
            errorLabel.style.color = "green"
            errorLabel.removeAttribute("hidden",true);
            flag_e = 1;
            enable();
        }
        else
        {
            useremail.style.color = "red";
                errorLabel.innerHTML = "Enter valid credentials!!"
                errorLabel.style.color = "red"
                errorLabel.removeAttribute("hidden",true);
            flag_e = 0;
            disable();
        }
});

pwd.addEventListener('input', function validate_pwd()
{
    if(password.test(pwd.value))
        {
            pwd.style.color = "green";
            errorLabel.innerHTML = "password is valid!!"
            errorLabel.style.color = "green"
            errorLabel.removeAttribute("hidden",true);
            flag_p = 1;
            enable();
        }
        else
        {
            pwd.style.color = "red";
            errorLabel.innerHTML = "Enter valid password!!"
            errorLabel.style.color = "red"
            errorLabel.removeAttribute("hidden",true);
            flag_p = 0;
            disable();
        }
});    

function enable(){
    if(flag_e == 1 && flag_p == 1)
            {
                button.disabled = false;
                form.setAttribute('action','/login/check');
               
            }        
}


function disable(){
    if(flag_e == 0 || flag_e == 0)
            {
                button.disabled = true;
                
            }        
}


// function Typing(){
//     var errorLabel =  document.getElementById("error");
//      errorLabel.setAttribute("hidden",true);
// }
