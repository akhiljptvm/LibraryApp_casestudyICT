let email = document.getElementById("email");

let bday = document.getElementById("birthday");
let mob = document.getElementById("number");
let err1 = document.getElementById("error1")
let err2 = document.getElementById("error2")
let err3 = document.getElementById("error3")
let err5 = document.getElementById("error5")


email.onfocus = () => {
    err1.innerText = "Enter your email address⚠️";
    // error1.style.width = "240px";
}
email.onblur = () => {
    err1.innerHTML = "";

}

  function emailValid(){
  // function validate(){
      // let regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/   **seems some runtime bug
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(email.value == ""){
         err1.innerText = "Email cannot be empty"
          email.style.borderColor ="red"
          // email.style.border.classList.add('animate__animated', 'animate__bounceOutLeft');
        //   err1.style.backgroundColor = "brown"
          err1.style.width = "200px" 
      
          
          return false;
      }
      else if(regex.test(email.value)==false){
          err1.innerText = "Please enter a valid email❕"
          err1.style.color = "red"
          email.style.borderColor ="red"
          err1.style.width = "225px"
        //   err1.style.backgroundColor = "rgba(92, 57, 0)"
          return false;
      }
      else{
          err1.innerText = "Email is Validated"
          email.style.borderColor ="green"
          err1.style.width = "150px"
          err1.style.color = "green"
          return true;
      }     
  };

  
  number.onfocus = () => {
      // err5.style.backgroundColor = "rgba(92, 57, 0)";
      err5.innerText = "Enter Your Number⚠️";
      err5.style.width = "200px";
      numtext.innerText = "Accept additional 3 formats:\n eg: XXX-XXX-XXXX, XXX.XXX.XXXX,\n XXX XXX XXXX ";
      numtext.style.color = "rgb(91, 133, 33)";
    //   window.scrollTo(250, 100);

  }
  number.onblur = () => {
      err5.innerHTML = "";
  }
  
  
  // number.onkeyup = numField;
  function numField(){
    
  // number.addEventListener('input',function(){
      let phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      // let phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      // let phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(number.value == ""){
          err5.innerText = "Number cannot be empty";
          err5.style.color="red";
        //   number.style.borderColor = "red"
        //   err5.style.backgroundColor = "brown"
          err5.style.width = "225px" 
          numtext.innerText = ""
          
          return false;
      }
  
    
  // XXX-XXX-XXXX
    else if(number.value.match(phoneCode)){
      err5.innerText = "Mobile number is valid";
      number.style.borderColor = "green"
      err5.style.width = "200px"  
      err5.style.color="green";
      numtext.innerText = "";
      return false;
  }
  
  else{
    // err5.style.backgroundColor = "rgb(92, 57, 0)";
    err5.style.color="red";
    err5.innerText = "Number must contain 10 digits";
    err5.style.width = "260px" 
    // number.style.borderColor ="brown"
    numtext.innerText = "Accept additional 3 formats:\n XXX-XXX-XXXX, XXX.XXX.XXXX,\n XXX XXX XXXX"
    
  
     
      return false;
  }
  };



  let pw = document.getElementById("password");
  let conpw = document.getElementById("conpassword");

  pw.onfocus = () => {
    err2.innerText = "Enter your Password⚠️";
    // error1.style.width = "240px";
   }
   pw.onblur = () => {
    err2.innerHTML = "";

   }
// 
function passMain(){
   
    var passwordScore = 0;
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(pw.value.match(lowerCaseLetters)) {  
      passwordScore += 20;
      
    } else {
    
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(pw.value.match(upperCaseLetters)) {  
      passwordScore += 20;
    } else {
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(pw.value.match(numbers)) {  
      passwordScore += 20;
      
    } else {
    }
    
    // Validate length
    if(pw.value.length >= 8) {
      passwordScore += 20;
    } else {
    }
  
  
  
  var strength = "";
  var backgroundColor = "red";
  
  if (passwordScore >= 80) 
  {
    strength = "Strong";
    // backgroundColor = "green";
    // err2.style.backgroundColor = "white"
    err2.innerText= ""
    err2.style.color = "green"
    pw.style.borderColor ="green"
    
  
  }
  else if (passwordScore >= 40) 
  {
    strength = "Medium";
    // backgroundColor = "Orange";
    // err2.style.backgroundColor = "white"
    err2.style.color = "orange"

  
  }
  else if (passwordScore >= 20) 
  {
    strength = "Weak";
    // err2.style.backgroundColor = "white"
    err2.style.color = "red"
    // backgroundColor = "maroon";
    err2.innerHTML ="please enter a valid email"
   
  }
  else 
  {
    strength = "Password cannot be empty";
    backgroundColor = ""
    // err2.style.backgroundColor = "brown"
    err2.style.width= "230px"
    // err2.style.color = "white"
    pw.style.borderColor ="red"        
    
  }   
   document.getElementById("error2").innerHTML = strength;
   
}



conpw.onfocus = () => {
    err3.innerText = "Enter your Repeat Password⚠️";
    // error1.style.width = "240px";
   }
   conpw.onblur = () => {
    err3.innerHTML = "";

   }


function passRepeat(){
    if(conpw.value.trim()==""){
    //   conpw.style.borderColor ="red"
      return false;
    }
  // document.getElementById("pass1").value == document.getElementById("myInput")
  if(pw.value == conpw.value){
    err3.innerText = "Password success ✔️"
    err3.style.width = "180px"
    err3.style.color = "green"
    // err3.style.backgroundColor ="green"
    conpw.style.borderColor ="green"
    return true;
  }else{
  err3.innerHTML ="Password does not match"
  err3.style.color = "red"
  err3.style.width = "240px"
//   err3.style.backgroundColor ="rgb(92, 57, 0)"
  conpw.style.borderColor ="red"
  return false;
  }
}
//


















  function validate(){
    let a = emailValid();
    let b = passMain();
    let c = numField();
    let d = passRepeat();
    return a && b && c && d;
  }




   
//     if(email.trim()=="" ){
//         document.getElementById("error1").innerText="You can't leave  Email field blank";
//         document.getElementById("error1").removeAttribute("hidden",true);
//         return false
    

//     }
//     else  if(pw.trim()=="" ){
//         document.getElementById("error2").innerText="You can't leave  Password field blank";
//         document.getElementById("error2").removeAttribute("hidden",true);
//         return false

//      }else  if(conpw.trim()=="" ){
//         document.getElementById("error3").innerText="You can't leave  retype field blank";
//         document.getElementById("error3").removeAttribute("hidden",true);
//         return false
//      }
     
//     else if (pw !== conpw){
//         document.getElementById("error3").innerText=" Password not match";
//         document.getElementById("error3").removeAttribute("hidden",true);
//         return false
//     }
//      else  if(bday.trim()=="" ){
//         document.getElementById("error4").innerText="You can't leave  birthday field blank";
//         document.getElementById("error4").removeAttribute("hidden",true);
//         return false
//      }
//      else  if(mob.trim()=="" ){
//         document.getElementById("err5").innerText="You can't leave  birthday field blank";
//         document.getElementById("err5").removeAttribute("hidden",true);
//         return false
//      }
// else{   
//         document.getElementById("error").setAttribute("hidden",true);


//         return true

//     }

// }