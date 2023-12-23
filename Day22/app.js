const btnList = document.querySelectorAll("button");
const imgList = document.querySelectorAll(".listImages img");
const content = document.querySelector(".listImages");

let arr = [];
// init array data
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});
function removeActive() {
  btnList.forEach((item) => {
    item.classList.remove("active");
  });
}
// add events for btns
btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActive();
    e.currentTarget.classList.add("active");
    let typeBtn = e.currentTarget.getAttribute("type");
    let filterArr = arr.filter((item) => {
      return typeBtn == "all" || typeBtn == item.type;
    });
    render(filterArr);
  });
});
function render(array) {
  content.innerHTML = ``;
  array.forEach((item) => {
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    divElement.appendChild(imgElement);
    content.appendChild(divElement);
  });
}

render(arr);
