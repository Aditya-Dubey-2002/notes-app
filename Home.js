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
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            
            <div id ="VNote" class="container">
      <h5 class="card-title">Note ${index + 1} </h5>
      <p class="card txt">${element}</p>
      <button id="deletebtn" class="deletebtn" onclick="deleteNote(this.id)">Delete Note</button>
      <button id="editbtn" class="editbtn">Edit Note</button>
    </div>
            `;
    });
    let notesElm = document.getElementById("VNote");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Nothing to show! Please add note first`
    }
}


function deleteNote(index) {
    //   console.log("I am deleting", index);

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
let editbtn = document.getElementById('editbtn');
editbtn.addEventListener("click", function (e) {
    // let Note = document.getElementById("Note");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let txt = ""
    function edit(element, index) {
        txt += `<div class="container">
        <h1>Edit Your note here</h1>
        <div>
          <textarea id="Notes" class="Note">${element}</textarea>
        </div>
        <button id="addebtn" class="addebtn">Add Edited Note</button>
      </div>
        `
    }
    edit();
    let ENote = document.getElementById("eNote");
    ENote.innerHTML = txt;

    // let addebtn = document.getElementById('addebtn');
    // addebtn.addEventListener("click", function (e) {
    //     let Notes = document.getElementById("Notes");
    //     let notes = localStorage.getItem("notes");
    //     if (notes == null) {
    //         notesObj = [];
    //     }
    //     else {
    //         notesObj = JSON.parse(notes);
    //     }
    //     notesObj.push(Note.value);
    //     notesObj.push(Notes.value);
    //     localStorage.setItem("notes", JSON.stringify(notesObj));
    //     Notes.value = "";
    //     console.log(notesObj);
    //     showNotes();

})
