// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBm6vk44KDeiq9m9yreBQpPcaSavdbpKxM",
    authDomain: "final-project-5423f.firebaseapp.com",
    databaseURL: "https://final-project-5423f-default-rtdb.firebaseio.com",
    projectId: "final-project-5423f",
    storageBucket: "final-project-5423f.appspot.com",
    messagingSenderId: "1070987476443",
    appId: "1:1070987476443:web:09d7da0eef60a3ceccfbfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference message collection firebase
var messagesRef = firebase.database().ref('users'); //specific collection called messages

//event listener to submit button
document.getElementById('signup').addEventListener('submit', submitFunction);

var timestamp = firebase.database.ServerValue.TIMESTAMP;

function getID(id) {
    return document.getElementById(id).value;
}

function submitFunction(event) {
    event.preventDefault();

    //get values
    var username = getID('username');
    var password = getID('password');
    var name = getID('name');
    var mobile = getID('mobile');
    var dob = getID('dob');
    var gender = getGender('gender');

    //save message to firebase
    saveMessages(username, password, name,mobile,dob,gender,timestamp);
    
    // clear form
    document.getElementById('signup').reset();
    console.log(name);
}

function getGender() {
    var els = document.getElementsByName('gender');
    var gender = null;
    for (var i = 0; i < els.length; i++) {
        if (els[i].checked) {
            gender = els[i].value;
        }
    }
    return gender;

}

//save message to firebase
function saveMessages(username, password, name, mobile, dob, gender, timestamp) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({ //sending object of data to message collection di firebase
        username: username,
        password: password,
        name: name,
        mobile: mobile,
        dob: dob,
        gender: gender,
        timestamp: timestamp
    });
}