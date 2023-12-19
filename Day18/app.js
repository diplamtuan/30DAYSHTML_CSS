const box = document.querySelectorAll(".box");
const target = document.querySelectorAll(".target");
let currentTarget = null;

target.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.parentElement.style.border = "2px solid #ccc";
    currentTarget = item;
  });

  item.addEventListener("dragend", () => {
    item.parentElement.style.border = "2px solid black";
    currentTarget = item;
  });
});
box.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  item.addEventListener("drop", (e) => {
    if (!item.querySelector(".target")) {
      item.appendChild(currentTarget);
    }
  });
});
