var firebaseConfig = {
    apiKey: "AIzaSyCMi09yD24Mv0YiUo0pnMb9eDcU9rV5GZQ",
    authDomain: "gritter-49cff.firebaseapp.com",
    databaseURL: "https://gritter-49cff-default-rtdb.firebaseio.com",
    projectId: "gritter-49cff",
    storageBucket: "gritter-49cff.appspot.com",
    messagingSenderId: "294444817473",
    appId: "1:294444817473:web:4da388e8e16952f2b47ac0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  