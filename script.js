const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.loginBtn-popup');
const closeBtn = document.querySelector('.close-icon');
const eyeIcon = document.querySelector('.toggle-visible');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const notifyIncorrect = document.querySelector('.notify-incorrect');

loginBtn.addEventListener('click', ()=>{
    if (wrapper.classList.contains('active-popup')) {
        document.getElementById("userEmail").value="";
        document.getElementById("userPassword").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        wrapper.classList.remove('active-popup');

        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active');
        }
    }
    else {
        wrapper.classList.add('active-popup');
    }
});

closeBtn.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');

    document.getElementById("userEmail").value="";
    document.getElementById("userPassword").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
});

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    document.getElementById("userEmail").value="";
    document.getElementById("userPassword").value="";
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    document.getElementById("email").value="";
    document.getElementById("password").value="";
});


function toggleVisible() {
    let userPassword = document.getElementById("userPassword");

    if (userPassword.type === "password") {
        userPassword.type="text";
        eyeIcon.tagName="eye-off";
    }
    else {
        userPassword.type="password";
        eyeIcon.tagName="eye";
    }
}
