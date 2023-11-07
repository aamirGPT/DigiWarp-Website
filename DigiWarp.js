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

function handleCardAnimation() {
    const cards = document.querySelectorAll(".card-animation");
    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleCardAnimation);

function handleTransitionAnimation() {
    const elements = document.querySelectorAll(".Section-3-Container");
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.animation = "grow 3.5s forwards";
        }
    });
}

document.addEventListener("scroll", handleTransitionAnimation);

function handleSection4Animation() {
    const section4 = document.getElementById("Section-4");
    const header = document.querySelector(".Section-4-Header");
    const body = document.querySelector(".Section-4-Body");
    
    if (isElementInViewport(section4)) {
        header.classList.add("animate-slide-in-right");
        body.classList.add("animate-slide-in-right");
    }
}

document.addEventListener("scroll", handleSection4Animation);
