const searchBtn = document.querySelector(".search_btn");
const searchBox = document.querySelector(".search_box");
const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    searchBox.classList.remove("open");
  }
});
searchBtn.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
