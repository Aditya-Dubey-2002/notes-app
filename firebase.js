var app_fireBase ={};
// script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js"
(function(){
  
    
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD0qJ02SYCKg319rk7EUFxvfHU8QHKS_js",
    authDomain: "notes--app-db917.firebaseapp.com",
    projectId: "notes--app-db917",
    storageBucket: "notes--app-db917.appspot.com",
    messagingSenderId: "911740533096",
    appId: "1:911740533096:web:70c62f6a589945f3eafedd",
    measurementId: "G-TEP34RR18S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  app_fireBase = firebase;
})()