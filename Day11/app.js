const btnSuccess = document.querySelector(".toast.success");
const btnWarning = document.querySelector(".toast.warning");
const btnError = document.querySelector(".toast.error");
const toastList = document.querySelector(".toastMessages");

btnSuccess.addEventListener("click", () => {
  addToast("success", "Toi da thanh cong");
});
btnWarning.addEventListener("click", () => {
  addToast("warning", "Toi da warning");
});
btnError.addEventListener("click", () => {
  addToast("error", "Toi da error");
});

function addToast(status, message) {
  let iconElement = "";
  switch (status) {
    case "success":
      iconElement = '<i class="fa-solid fa-circle-check"></i>';
      break;
    case "warning":
      iconElement = '<i class="fa-solid fa-circle-exclamation"></i>';
      break;
    case "error":
      iconElement = '<i class="fa-solid fa-triangle-exclamation"></i>';
      break;
  }
  const toastItem = document.createElement("div");
  toastItem.classList.add("toastItem");
  toastItem.classList.add(status);
  toastItem.innerHTML = `
        ${iconElement}
        <p>${message}!</p>
    `;
  toastList.appendChild(toastItem);
  setTimeout(() => {
    toastItem.style.animation = "toastHide 2s ease forwards";
  }, 4000);
  setTimeout(() => {
    toastItem.remove();
  }, 6000);
}
