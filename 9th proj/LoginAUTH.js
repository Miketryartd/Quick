document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById('Email-login').value;
    const username = document.getElementById('User-login').value;
    const password = document.getElementById('Userpass-login').value;
    const userArray = JSON.parse(localStorage.getItem('Users')) || [];
    const userVOID = userArray.find(users => users.username && users.email);
    
    if (email.trim() === '' || username.trim() === '' || password.trim() === '' ){
        alert('Type bitch');
        return;
    }
    
    if (userVOID){
        alert('Fuck u');
       
    } else {
        alert('fuck off');
        userArray.push(username, email, password);
        localStorage.setItem('Users', JSON.stringify(userArray));
        window.location.href = 'home.html';
    }
});

