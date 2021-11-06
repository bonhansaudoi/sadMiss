var main = document.querySelector("main");

var modal = document.querySelector(".modal");
var children = document.querySelector(".form-card").children;
var close = document.querySelectorAll(".close-modal");

var profile = document.querySelector(".profile");
var formProfile = document.querySelector(".form-profile");
var signin = document.querySelector(".signin");
var signup = document.querySelector(".signup");
var formSignin = document.querySelector(".form-signin");
var formSignup = document.querySelector(".form-signup");
var i;

function closeModal() {
    modal.style.display = "none"; main.style.display = "block";
    
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
}

for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
        closeModal(); 
    });    
}

// click outside close modal
document.body.onclick = function (event) {
    if (event.target.matches('.modal-center')) {
        closeModal();
    }
}

// Modal profile
profile.onclick = function () {
    modal.style.display = "block";
    formProfile.style.display = "block"; 
}

// Modal auth
signin.onclick = function () {
    modal.style.display = "block";
    formSignin.style.display = "block"; main.style.display = "none";  
}

signup.onclick = function () {
    modal.style.display = "block";
    formSignup.style.display = "block"; main.style.display = "none";  
} 