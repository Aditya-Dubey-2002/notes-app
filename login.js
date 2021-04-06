//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAzYx80KaUBs63Q6zTdpNeB2E_XUjn8iPM",
//     authDomain: "notes-app-11b25.firebaseapp.com",
//     projectId: "notes-app-11b25",
//     storageBucket: "notes-app-11b25.appspot.com",
//     messagingSenderId: "333433475760",
//     appId: "1:333433475760:web:f3dbc123c96664b30b2175",
//     measurementId: "G-NDEX4MTWVG"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();

// const auth = firebase.auth();

// function login(){

//   var email = document.getElementById("email");
//   var password = document.getElementById("password");

//   const promise =auth.signInWithEmailAndPassword(email.value, password.value);
//   promise.catch(e => alert(e.message));

//   alert("Logged In");

// }