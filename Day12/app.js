const range = document.querySelector(".range");
const progress = document.querySelector(".progress");
const value = document.querySelector(".progress span");
const body = document.querySelector("body");

range.addEventListener("mousemove", (e) => {
  const percent = Math.round((e.offsetX / 600) * 100);
  setProgress(percent);
  setBackground(percent);
});

function setProgress(percent) {
  progress.style.width = `${percent}%`;
  value.innerText = `${percent}%`;
}

function setBackground(percent) {
  body.style.backgroundColor = `rgba(0,0,0,${percent / 100})`;
}
