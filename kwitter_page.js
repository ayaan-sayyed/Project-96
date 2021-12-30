// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjlKMJyShl0dP-6LJHERFdk-33PYX-hG0",
    authDomain: "kwitter-defdb.firebaseapp.com",
    databaseURL: "https://kwitter-defdb-default-rtdb.firebaseio.com",
    projectId: "kwitter-defdb",
    storageBucket: "kwitter-defdb.appspot.com",
    messagingSenderId: "544447091945",
    appId: "1:544447091945:web:066445d2b028a4d6cd4c78"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send() {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      Message:msg,
      like:0
      });
      document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
