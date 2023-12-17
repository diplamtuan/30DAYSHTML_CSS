const mainImage = document.querySelector(".mainImage img");
const listImage = document.querySelectorAll(".list-img div img");
const prevBtn = document.querySelector(".control.prev");
const nextBtn = document.querySelector(".control.next");

let currentIndex = 0;
listImage.forEach((img, index) => {
  img.addEventListener("click", () => {
    mainImage.style.animation = "";
    setTimeout(() => {
      loadMainImage(index);
      mainImage.style.animation = "fadeShow 0.5s ease-in-out";
    }, 100);
  });
});
function loadMainImage(i) {
  removeActive();
  mainImage.src = listImage[i].src;
  listImage[i].setAttribute("class", "active");
  currentIndex = i;
}

function removeActive() {
  listImage.forEach((img) => {
    img.removeAttribute("class", "active");
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = listImage.length - 1;
  } else {
    currentIndex--;
  }
  mainImage.style.animation = "";
  setTimeout(() => {
    loadMainImage(currentIndex);
    mainImage.style.animation = "slideLeft 0.5s ease-in-out";
  }, 100);
});

nextBtn.addEventListener("click", () => {
  if (currentIndex == listImage.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  mainImage.style.animation = "";
  setTimeout(() => {
    loadMainImage(currentIndex);
    mainImage.style.animation = "slideRight 0.5s ease-in-out";
  }, 100);
});
loadMainImage(0);
