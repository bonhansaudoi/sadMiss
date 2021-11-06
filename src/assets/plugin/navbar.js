// hamberger
var hamberger = document.querySelector(".hamberger");
var navbarMenu = document.querySelector(".navbar-menu");
var a = document.querySelectorAll("a");
var i;

hamberger.onclick = function () {
    navbarMenu.classList.toggle("hidden");
}
for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
        navbarMenu.classList.add("hidden");
    });
}

/* dropdown */
var dropdownBtn = document.getElementsByClassName("dropdown-btn");
var dropdownContent = document.getElementsByClassName("dropdown-content");
 
function hideDropdown() {
    for (i = 0; i < dropdownContent.length; i++) {
        dropdownContent[i].classList.add("hidden");
    }

    for (i = 0; i < dropdownBtn.length; i++) {
        dropdownBtn[i].classList.remove("active");
    }
} 

for (i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener("click", function () {
        if (!this.nextElementSibling.classList.contains("hidden")) {
            this.nextElementSibling.classList.add("hidden");
            this.classList.remove("active");
        }
        else {
            hideDropdown();
            this.nextElementSibling.classList.toggle("hidden");
            this.classList.add("active");
        }
    })
}

// window
window.onclick = function (event) {
    if (event.target.matches('.dropdown-btn-child')) {
        dropdown-btnChild.parentElement.classList.remove("hidden");
        if (dropdownChild.classList.contains("hidden")) {
            this.classList.toggle("hidden");
        }
    } else if (!event.target.matches('.dropdown-btn')) {
        hideDropdown();
    }
}

// back
var back = document.querySelector(".back");

// back.addEventListener("click", function () {
//     window.history.back();
// })

back.onclick = function () {
    window.history.back();
}