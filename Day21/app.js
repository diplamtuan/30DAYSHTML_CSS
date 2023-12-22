var labelBtn = document.querySelector("label");
var body = document.querySelector("body");
var inputChecked = document.querySelector("input");

let mode = localStorage.getItem("mode") ? "dark" : "";
body.setAttribute("class", mode);
function checkToggleInput() {
  if (localStorage.getItem("mode") == "dark") {
    inputChecked.setAttribute("checked", true);
  } else {
    inputChecked.removeAttribute("checked");
  }
}
checkToggleInput();
labelBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  let currentMode = body.getAttribute("class");
  localStorage.setItem("mode", currentMode);
  checkToggleInput();
});
