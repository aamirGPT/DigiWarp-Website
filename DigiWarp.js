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

function handleSection2Transition() {
    const cards = document.querySelectorAll(".Section-2-Transition");
    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleSection2Transition);

function handleSection4Transition() {
    const Elements = document.querySelectorAll(".Section-4-Transition");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleSection4Transition);

function handleSection7Transition() {
    const Elements = document.querySelectorAll(".Section-7-Transition");
    Elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        }
    });
}

document.addEventListener("scroll", handleSection7Transition);