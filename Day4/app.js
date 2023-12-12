const images = document.querySelectorAll(".image img");
const btnPrev = document.querySelector(".control.prev");
const btnNext = document.querySelector(".control.next");
const btnClose = document.querySelector(".gallery .close");
const galleryInner = document.querySelector(".gallery__inner img");
const gallery = document.querySelector(".gallery");
let currentIndex = 0;
function showGallery(index) {
  gallery.classList.remove("hide");
  galleryInner.src = images[index].src;
  if (currentIndex > 0) {
    showPrev();
  } else {
    hidePrev();
  }
  if (currentIndex == images.length - 1) {
    hideNext();
  } else {
    showNext();
  }
}
function hideGallery() {
  gallery.classList.add("hide");
}

function hidePrev() {
  btnPrev.classList.add("hideControll");
}

function hideNext() {
  btnNext.classList.add("hideControll");
}

function showPrev() {
  btnPrev.classList.remove("hideControll");
}

function showNext() {
  btnNext.classList.remove("hideControll");
}
images.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    showGallery(currentIndex);
  });
});

btnNext.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery(currentIndex);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery(currentIndex);
  } else {
    currentIndex = 0;
    showGallery(currentIndex);
  }
});

btnClose.addEventListener("click", hideGallery);

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    hideGallery();
  }
});
