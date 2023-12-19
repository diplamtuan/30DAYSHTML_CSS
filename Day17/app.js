const listCounter = document.querySelectorAll(".counter");

listCounter.forEach((el) => {
  countUp(el);
});
function countUp(el) {
  let numberTarget = parseInt(el.querySelector("p").innerText);
  let elementCounter = el.querySelector("p");
  let count = 0;
  let idCounter = setInterval(() => {
    let time = 140;
    let step = numberTarget / time;
    count += step;
    if (count > numberTarget) {
      elementCounter.innerText = numberTarget;
      clearInterval(idCounter);
    } else {
      elementCounter.innerText = Math.round(count);
    }
  }, 1);
}
