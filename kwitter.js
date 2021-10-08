function login(){
    user_name=document.getElementById("placeholder").value;
    window.location="kwitter_room.html";
   
    localStorage.setItem("user name",user_name);
}