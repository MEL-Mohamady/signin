
var storedUserName = localStorage.getItem("userss");
if(storedUserName){
    document.getElementById("welcome").innerHTML="welcome"+storedUserName;
}


document.getElementById("logOut").addEventListener("click",function(){
   
    localStorage.removeItem("userss");
    

    window.location="./index.html";
})


if(!storedUserName){
    document.getElementById("welcome").innerHTML=" U should login first";
    document.getElementById("logOut").classList.add("d-none")
    document.getElementById("signIN").classList.remove("d-none")
    document.getElementById("signIN").addEventListener("click",function(){
        window.location="./signin.html";    })


}