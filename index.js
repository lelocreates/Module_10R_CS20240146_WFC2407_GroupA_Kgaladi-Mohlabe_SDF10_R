// Imports function from Firebase.google.com so that the initalizeApp function can be used
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"

// Imports database data from Firebase.google.com so that the initalizeApp function can be used
import { getDatabase,
         ref,
         push
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"

  //web app's Firebase configuration
const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig)

 const database = getDatabase(app)
 const referenceInDB = ref(database, "leads")



const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    
    console.log(inputValue)
})