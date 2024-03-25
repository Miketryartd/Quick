import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJmgsAtnZe74k6rNFn_jr2GLPMA3WCNdk",
          authDomain: "quickie-1dddc.firebaseapp.com",
          projectId: "quickie-1dddc",
          storageBucket: "quickie-1dddc.appspot.com",
          messagingSenderId: "607731414177",
          appId: "1:607731414177:web:d43b1d2194c349b4aface0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase database service
const db = getDatabase();

// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form field values
    const email = document.getElementById('Email-signup').value;
    const username = document.getElementById('User-signup').value;
    const password = document.getElementById('Userpass-signup').value;
    const birthDate = document.getElementById('Userdate-signup').value;
    const UserFirstName = document.getElementById('UserFirstName').value;
    const UserMiddleInitial = document.getElementById('UserMiddleInitial').value;
    const UserLastName = document.getElementById('UserLastName').value;
    const UserAbbreviation = document.getElementById('UserAbbreviation').value;
    const UserOCCUPATION = document.getElementById('UserOccupation').value;
    const UserPIN = document.querySelector(' [data-value="User18PIN" ] ').value;
    const SELECT = document.getElementById('Select').value;
    const UserFILE = document.getElementById('ImgUpload-signup').value;
    // Check if any field is empty
    if (email.trim() === '' || username.trim() === '' || password.trim() === '' || birthDate.trim() === '' || UserFirstName.trim() === '' || UserPIN.trim() === ''  || UserLastName === '' || UserMiddleInitial.trim() === '' || UserOCCUPATION.trim() === '') {
    
     const ALLERRORS = document.querySelectorAll('[data-ALL="inps"]');
     ALLERRORS.forEach(inps => {
           inps.style.border = '1px solid red';
     })
    
      return;
    } else {
        const ALLERRORS = document.querySelectorAll('[data-ALL="inps"]');
        ALLERRORS.forEach(inps => {
              inps.style.border = 'border: 2px solid rgba(0, 0, 0, 0.152)';
        })
    }



    
    // adding trim-length to inputs//
   




    // Check if username already exists in the database
    const userRef = ref(db, 'users/' + username);
    set(userRef, {
        UserFirstName: UserFirstName,
        UserMiddleInitial: UserMiddleInitial,
        UserLastName: UserLastName,
        UserAbbreviation: UserAbbreviation,
        SELECT: SELECT,
        UserOCCUPATION: UserOCCUPATION,
        email: email,
        birthDate: birthDate,
        username: username,
        password: password,   
        UserPIN: UserPIN
    }).then(() => {
        alert('User registered successfully!');
        // Redirect to login page
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Error writing document: ", error);
        alert('An error occurred. Please try again later.');
    });
});
