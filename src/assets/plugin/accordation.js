/* accordatiion */
var accBtn = document.getElementsByClassName("accordation-btn");
var accContent = document.getElementsByClassName("accordation-content");

function hideAccordation() {
    for (i = 0; i < accContent.length; i++) {
        accContent[i].classList.add("hide");
    }

    // for (i = 0; i < accBtn.length; i++) {
    //     accBtn[i].classList.remove("active");
    // }
}

for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function () {
        if (!this.nextElementSibling.classList.contains("hide")) {
            this.nextElementSibling.classList.add("hide");
            // this.classList.remove("active");
        }
        else {
            hideAccordation();
            this.nextElementSibling.classList.toggle("hide");
            // this.classList.add("active");
        }
    })
}