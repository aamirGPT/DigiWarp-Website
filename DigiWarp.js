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

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".Card");

    function checkVisibility() {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) {
                card.classList.add("animate-slide-in");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});
