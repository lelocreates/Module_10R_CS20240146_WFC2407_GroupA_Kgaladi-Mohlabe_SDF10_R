// Imports code from Firebase.google.com so that the initalizeApp function can be used
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"

  //web app's Firebase configuration
const firebaseConfig = {
}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig)



const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})