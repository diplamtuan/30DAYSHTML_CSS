const btnShowModal = document.querySelector("#btn-open-modal");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".modal__header i");
const btnClose = document.querySelector(".modal__footer button");

function toggleShowModal() {
  modal.classList.toggle("hide");
}
btnShowModal.addEventListener("click", toggleShowModal);
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    toggleShowModal();
  }
});
iconClose.addEventListener("click", toggleShowModal);
btnClose.addEventListener("click", toggleShowModal);
