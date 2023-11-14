document.getElementById("Menu-Toggle").addEventListener("click", function () {
    const menuActions = document.querySelector(".Menu-Actions");
    menuActions.classList.toggle("active");
    document.getElementById("Menu-Toggle").style.flexDirection = "column";
    const menuToggle = document.getElementById("Menu-Toggle");
    if (menuActions.classList.contains("active")) {
        menuToggle.textContent = "Close";
    } else {
        menuToggle.innerHTML =
            '<img src="./assets/images/lines.png" alt="menu" id="HamburgerBtn"></img>';
    }
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=
                (window.innerHeight ||
                    document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight))
    );
}

function handleDownToUpTransition() {
    const cards = document.querySelectorAll(".DownToUpTransition");
    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleDownToUpTransition);

function handleGrowTransition() {
    const Elements = document.querySelectorAll(".Grow-Transition");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleGrowTransition);

function handleRightToLeftTransition() {
    const Elements = document.querySelectorAll(".RightToLeftTransition");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleRightToLeftTransition);

function handleDownToUpOnLoadTransition() {
    const Elements = document.querySelectorAll(".DownToUpTransitionOnLoad");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}
document.addEventListener("DOMContentLoaded", handleDownToUpOnLoadTransition);

function HandleRightToLeftOnLoadTransition() {
    const Elements = document.querySelectorAll(".RightToLeftTransitionOnLoad");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}
document.addEventListener(
    "DOMContentLoaded",
    HandleRightToLeftOnLoadTransition
);

// Subhranta JS:
const readMoreButton = document.querySelector(".read-more-btn");
const additionalContent = document.getElementById("extraContent");

function toggleContent() {
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        additionalContent.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
}

readMoreButton.addEventListener("click", toggleContent);

function validateAlphabeticInput(input) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
}

function validateEmail() {
    let emailInput = document.getElementById("emailInput").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById("emailError");

    if (emailInput === "") {
        emailError.textContent = ""; // Clear error message if no input
    } else if (emailRegex.test(emailInput)) {
        emailError.textContent = ""; // Clear error message if email is valid
    } else {
        emailError.textContent = "Please enter a valid email address";
    }
}
function validateForm() {
    // Check the email input before submitting the form
    let emailInput = document.getElementById("emailInput").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById("emailError");

    if (emailInput === "" || !emailRegex.test(emailInput)) {
        // Display error message and prevent form submission
        emailError.textContent = "Please enter a valid email address";
        return false;
    }

    // If everything is valid, you can proceed with form submission
    return true;
}
