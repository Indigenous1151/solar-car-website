const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.loginBtn-popup');
const closeBtn = document.querySelector('.close-icon');
const eyeIcon = document.querySelector('.toggle-visible');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const notifyIncorrect = document.querySelector('.notify-incorrect');


//---------------------------------------------------------//
//               Login Page Functionality                  //
//---------------------------------------------------------//
loginBtn.addEventListener('click', ()=>{
    if (wrapper.classList.contains('active-popup')) {
        document.getElementById("userEmail").value="";
        document.getElementById("userPassword").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        wrapper.classList.remove('active-popup');

        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active');

            if (notifyIncorrect.classList.contains('show-message')) {
                notifyIncorrect.classList.remove('show-message');
            }
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

    if (notifyIncorrect.classList.contains('show-message')) {
        notifyIncorrect.classList.remove('show-message');
    }
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
    const userLoginPassword = document.getElementById("userPassword");
    const userRegisterPassword = document.getElementById("password");

    if (userLoginPassword.type === "password") {
        userLoginPassword.type="text";
        eyeIcon.tagName="eye-off";
    }
    else {
        userLoginPassword.type="password";
        eyeIcon.tagName="eye";
    }

    if (userRegisterPassword.type === "password") {
        userRegisterPassword.type="text";

    }
    else {
        userRegisterPassword.type="password";
    }
}


//-------------------------------------------------//
//               String Query Script               //
//-------------------------------------------------//

const url = window.location.href;
const searchParams = new URL(url).searchParams;
const entries = new URLSearchParams(searchParams).entries();
const entryArray = Array.from(entries);

if (entryArray[0][0] === "status") {
    if (entryArray[0][1] === "invalid") {
        wrapper.classList.add('active-popup'); // open the login window
        notifyIncorrect.classList.add('show-message'); // show the user or password invalid message
    }
}
