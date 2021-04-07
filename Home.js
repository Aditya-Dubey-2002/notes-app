// var mainApp ={};

// (function(){
//     varfirebase = app_fireBase;
//     var uid = null
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//         }else{
//             // redirect to login page
//             window.location.replace("login.html");
//         }
//       });
//       function logOut(){
//           firebase.auth().signOut();
//       }
//       mainApp.logOut =logOut;
// })()

console.log('Welcome to Notes-App');

//javascript is yet to be added
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let Note = document.getElementById("Note");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(Note.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    Note.value = "";
    console.log(notesObj);
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
            
            <div id ="VNote" class="container">
      <h5 class="card-title">Note No. ${index + 1} </h5>
      <p class="card txt">${element}</p>
      <button  class="deletebtn" onclick="deleteNote(this.id)">Delete Note</button>
      <button  onclick="editbtn(this.id)" class="editbtn"> Edit Note </button>
      
    </div>
            `;
    });
    let notesElm = document.getElementById("VNote");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Nothing to show! Please add some notes first`
    }

}
function deleteNote(index) {
    //   console.log("I am deleting", index);
    let confirmation = confirm("Are you sure, you want to delete Note?")
    if (confirmation == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

// let editbtn = document.getElementById('editbtn');
// editbtn.addEventListener("click", function (e) {
  function  editbtn(element,index){
    // let Note = document.getElementById("Note");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    console.log(notesObj);
    notesObj.findIndex((element,index) =>{
        Note.value = element.notes;
    })
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
showNotes();
}
    



   

