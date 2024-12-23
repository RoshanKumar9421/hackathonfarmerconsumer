const btnPopup = document.querySelector('.btnlogin-popup');
const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}
function deactivateCoverBox(){
    cover_box.classList.remove('active');
}
function activatePopup(){
    cover_box.classList.add('active-popup');
}
function deactivateCoverPopup(){
    cover_box.classList.remove('active-popup');
}
registerLink.addEventListener('click', activateCoverBox);
loginLink.addEventListener('click', deactivateCoverBox);
btnPopup.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivateCoverPopup);

function redirectToFarmerLogin() {
    window.location.href = "farmer.html";
}
window.location.href = "pages/farmer-login.html";

// Show the login options modal
function showLoginOptions() {
    document.getElementById("login-options").style.display = "block";
}

// Close the login options modal
function closeLoginOptions() {
    document.getElementById("login-options").style.display = "none";
}

// Redirect to Farmer Login
function redirectToFarmerLogin() {
    window.location.href = "login web page/farmer.html";
}

// Redirect to Consumer Login
function redirectToConsumerLogin() {
    window.location.href = "login web page/consumer.html";
}

