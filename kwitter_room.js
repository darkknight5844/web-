var firebaseConfig = {
      apiKey: "AIzaSyD9gNc64m3f0hOZJZW2Z8e3w92TGXWsY6k",
      authDomain: "kwitter-1b75c.firebaseapp.com",
      projectId: "kwitter-1b75c",
      storageBucket: "kwitter-1b75c.appspot.com",
      messagingSenderId: "1000133160483",
      appId: "1:1000133160483:web:c52c11c157a978c2c54b96"
    };
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
 }

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(room_name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}
