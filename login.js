const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const userSignInBtn = document.getElementById("user-sign-in");
const userSignUpBtn = document.getElementById("user-sign-up");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const session = "wondermap_session";

userSignInBtn.addEventListener('click', function(){
    const email = document.getElementById("sign-in-email").value
    const password = document.getElementById("sign-in-password").value

    if(email.length < 2){
        alert("Invalid email");
        return
    }

    if(password.length < 4){
        alert("Invalid password")
        return
    }

    localStorage.setItem(session, JSON.stringify({email: email, password: password}));

    window.location.href = "/mapname.html"
});

userSignUpBtn.addEventListener('click', function(){
    const name1 = document.getElementById("sign-up-name").value
    const email1 = document.getElementById("sign-up-email").value
    const password1 = document.getElementById("sign-up-password").value

    if(name1.length < 2){
        alert("Invalid name")
        return
    }

    if(email1.length < 2){
        alert("Invalid email");
        return
    }

    if(password1.length < 6){
        alert("Invalid password")
        return
    }

    localStorage.setItem(session, JSON.stringify({name: name1, email: email1, password: password1}));

    window.location.href = "/mapname.html"
});