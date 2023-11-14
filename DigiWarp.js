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
document.addEventListener("DOMContentLoaded", HandleRightToLeftOnLoadTransition);

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