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
