document.getElementById("hey").innerHTML="Welcome "+localStorage.getItem("user name")+"😊";
const firebaseConfig = {
    apiKey: "AIzaSyDJJ00UujW49S_enXNiT2pPRwCb0yygwX0",
    authDomain: "lets-chat-web-app-96014.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-96014-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-96014",
    storageBucket: "lets-chat-web-app-96014.appspot.com",
    messagingSenderId: "620684192280",
    appId: "1:620684192280:web:53562312252d085510716d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room(name){
    room=document.getElementById("roomname").value;
    firebase.database().ref("/").child(room).update({
          purpose:"Adding the room",
    });
    localStorage.setItem("room name",room);
    console.log(name);
    localStorage.setItem("room name",name);
    window.location="kwitter_page.html";
}
function Redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user name");
    localStorage.removeItem("room name");
    window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
      row="<div class='room_name' id="+room+" onclick='Redirect(this.id)'>#"+room+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();