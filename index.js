// Imports function from Firebase.google.com so that the initalizeApp function can be used
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"

// Imports database data from Firebase.google.com so that the initalizeApp function can be used
import { getDatabase,
         ref,
         push,
         onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"

  //web app's Firebase configuration
const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-38c17-default-rtdb.europe-west1.firebasedatabase.app/"

}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig)

 const database = getDatabase(app)
 const referenceInDB = ref(database, "leads")



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})