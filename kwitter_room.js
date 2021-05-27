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

function createRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

            console.log("room names : " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
            console.log("row = " + row)
            document.getElementById("output").innerHTML += row;

        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_Name", name);
    window.location = "kwitter_page.html";
}