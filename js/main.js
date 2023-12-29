var userName = document.getElementById("userName");
var email =document.getElementById("email");
var password =document.getElementById("password");
var exist = document.getElementById("exist");
var success = document.getElementById("success");







var usersList=[];
if(localStorage.getItem("users")!=null){
    usersList= JSON.parse(localStorage.getItem('users'))
  }




  document.getElementById("signUp").addEventListener("click", function () {
    if (isEmailExist()==false) {
      signUp();


    }
     else {
      exist.classList.remove("d-none")

    }
  });
  
  function signUp() {
    var user = {
      userName: userName.value,
      email: email.value,
      password: password.value
    }
    if(validatEmail(user)==true){
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    success.classList.remove("d-none")
    exist.classList.add("d-none")
    clear();
      window.location="./signin.html"
  }else{
      document.getElementById("valid").classList.remove("d-none")
      
  }
    
  }
  
  function clear() {
    userName.value = "";
    email.value = "";
    password.value = "";
  }
  
  function isEmailExist() {
    var enteredEmail = email.value.toLowerCase();
    
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].email.toLowerCase() === enteredEmail) {
        return true; 
      }
    }
    return false; 
  }

  function validatEmail(user){
    var regix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;

 
if(regix.test(user.email)){
   
   
    return true;
}
else{
    return false;
}


}
