const animationElements = document.querySelectorAll(".animationElement");
function setAnimation(element) {
  const elementPosition = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (!(elementPosition.top > windowHeight || elementPosition.bottom < 0)) {
    element.classList.add("end");
  } else {
    element.classList.remove("end");
  }
}
animationElements.forEach((element) => {
  setAnimation(element);
});

window.onscroll = () => {
  animationElements.forEach((element) => {
    setAnimation(element);
  });
};
