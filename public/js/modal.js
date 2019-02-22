const btnToggles = document.querySelectorAll(".btnToggleModal");


btnToggles.forEach(btn => {
    const modal = document.querySelector(`${btn.dataset.target}`);
    const closeBtn = modal.querySelector(".close");
    const modalContent = modal.querySelector(".modal-content ");
    btn.onclick = function () {
        modal.style.display = "block";
        modalContent.classList.remove("hide-modal");
    }

    closeBtn.onclick = function () {
        setTimeout(() => {
            modal.style.display = "none";
        }, 400);
        modalContent.classList.add("hide-modal");
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            setTimeout(() => {
                modal.style.display = "none";
            }, 400);
            modalContent.classList.add("hide-modal");
        }
    }
})