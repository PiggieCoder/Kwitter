
//ADD YOUR FIREBASE LINK HERE

var firebaseConfig = {
    apiKey: "AIzaSyDb5YflD6dR-NM1AnogSvdHzfRlxdlOhx0",
    authDomain: "practice-6e6a0.firebaseapp.com",
    databaseURL: "https://practice-6e6a0-default-rtdb.firebaseio.com",
    projectId: "practice-6e6a0",
    storageBucket: "practice-6e6a0.appspot.com",
    messagingSenderId: "648640635089",
    appId: "1:648640635089:web:77c6cbae4c711a4902a5f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        Pig: "Pigs are Cute"
      });
  }
