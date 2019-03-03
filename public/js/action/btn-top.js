const btnTop = document.querySelector("#btn-top");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 150) {
        btnTop.style.display = "block";
    }
    else {
        btnTop.style.display = "none";
    }
})

btnTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})