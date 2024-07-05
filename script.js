const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.loginBtn-popup');
const closeBtn = document.querySelector('.close-icon');
const submitBtn = document.querySelector('.btn');
const eyeIcon = document.querySelector('.toggle-visible');

loginBtn.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

// take in the text from email and password inputs
// hash inputted values
// compared hashed values with database for valid credentials
function getUserInput() {
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    alert(userEmail + ' ' + userPassword);
}


function toggleVisible() {
    let userPassword = document.getElementById("userPassword");

    if (userPassword.type === "password") {
        userPassword.type = "text";
        eyeIcon.tagName = "eye-off";
    }
    else {
        userPassword.type = "password";
        eyeIcon.tagName = "eye";
    }
}