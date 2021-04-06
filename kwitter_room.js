
var firebaseConfig = {
      apiKey: "AIzaSyBVejRRmOS7hwRfPrpFV3fJE6IbkkvPmEU",
      authDomain: "kwitter-579ba.firebaseapp.com",
      databaseURL: "https://kwitter-579ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-579ba",
      storageBucket: "kwitter-579ba.appspot.com",
      messagingSenderId: "643889507904",
      appId: "1:643889507904:web:10d3f99864666e9f0df9a5",
      measurementId: "G-CZFWFFH18Z"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_message_page.html";
    }
    
    function getData() 
    {  firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot)
     { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_message_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
    
