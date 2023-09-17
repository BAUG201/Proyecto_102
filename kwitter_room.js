var firebaseConfig = {

      apiKey: "AIzaSyCDNdWxhAENna1XWcRG-RO6CgGggIqrTAI",
      authDomain: "kwitter-bdd3a.firebaseapp.com",
      databaseURL: "https://kwitter-bdd3a-default-rtdb.firebaseio.com",
      projectId: "kwitter-bdd3a",
      storageBucket: "kwitter-bdd3a.appspot.com",
      messagingSenderId: "141561627724",
      appId: "1:141561627724:web:9fb58de51483744dfa60e9"
};
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
