const eKey = document.querySelector(".key p:last-child");
const eLocation = document.querySelector(".location p:last-child");
const eWhich = document.querySelector(".which p:last-child");
const eCode = document.querySelector(".code p:last-child");
const result = document.querySelector(".result");
const alert = document.querySelector(".alert");
const box = document.querySelector(".box");

document.addEventListener("keydown", (e) => {
  alert.classList.add("hide");
  box.classList.remove("hide");
  let key = e.key;
  if (e.which == 32) {
    key = "Space";
  }
  eKey.innerText = key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  result.innerText = e.which;
});
