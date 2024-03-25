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
    const email = document.getElementById('Email-login').value;
    const username = document.getElementById('User-login').value;
    const password = document.getElementById('Userpass-login').value;
   

    // Check if any field is empty
    if (email.trim() === '' || username.trim() === '' || password.trim() === '' || birthDate.trim() === '') {
        alert('Please fill out all fields');
        return;
    }

    // Check if username already exists in the database
    const userRef = ref(db, 'users/' + username);
    set(userRef, {
        username: username,
        email: email,
        birthDate: birthDate,
        password: password
    }).then(() => {
        alert('User registered successfully!');
        // Redirect to login page
        window.location.href = 'home.html';
    }).catch((error) => {
        console.error("Error writing document: ", error);
        alert('An error occurred. Please try again later.');
    });
});
