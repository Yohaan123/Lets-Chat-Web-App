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
   room_name = localStorage.getItem("room_name");
    console.log("user_name = " + user_name + "room_name = " + room_name);
   function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
       });
       document.getElementById("msg").value  = "";
   }

  function getData(){
      firebase.database().ref("/" + room_name).on('value',function(snapshot){
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot){
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if(childKey != "purpose"){
                  firebase_message_id = childKey;
                  message_data = childData;

                  console.log(firebase_message_id);
                  console.log(message_data);

                  name = message_data['name'];
                  message = message_data['message'];
                  like = message_data['like'];
                  
                  name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + like + " onclick='updateLike(this.id)'>";
                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>";

                  row = name_with_tag + message_with_tag + like_button + span_with_tag;
                  document.getElementById("output").innerHTML += row;
              }
          });
      });
  }
  getData();

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function updateLike(message_id){
    console.log("liked message id is " + message_id );
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log("updated_likes = " + updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });
}