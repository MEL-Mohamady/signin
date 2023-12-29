var signInEmail = document.getElementById("signInEmail");
var signPassword = document.getElementById("signPassword");
var exist = document.getElementById("exist");
var success = document.getElementById("success");


var usersList = [];
if(localStorage.getItem("users")!=null){
    usersList= JSON.parse(localStorage.getItem('users'))
  }

function userExist() {
  var signIn = {
    signInEmail: signInEmail.value,
    signPassword: signPassword.value
  }

  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email == signIn.signInEmail && usersList[i].password == signIn.signPassword) {
      localStorage.setItem("userss", JSON.stringify(usersList[i].userName));
      return true;
    }
  }
  return false;
}

signInBtn.addEventListener("click", function () {
    function empty(){
        if(signInEmail.value==""||signPassword.value==""){
            return false}
            else{
                return true
            }
    }
    
    if(empty()==false){
        exist.classList.add("d-none")
    }
  if (userExist() == true) {
    exist.classList.add("d-none")
    success.classList.remove("d-none")
    window.location = "./welcome.html";
  } else {
    exist.classList.remove("d-none")
    success.classList.add("d-none")
    
  }
});




