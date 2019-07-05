let mainModal = document.getElementById("modal_main");
let successModal = document.getElementById("modal_success");
let closeBtn = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");
//let arr = Array.from(closeBtn);

mainModal.classList.add("modal_active");

closeBtn.forEach(e => {
    e.onclick = () => {
        e.closest(".modal").classList.remove("modal_active");
    }
});

showSuccess.onclick = () => {
    mainModal.classList.remove("modal_active");
    successModal.classList.add("modal_active");
}