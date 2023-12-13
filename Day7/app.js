let tags = ["NodeJs", "ReactJs"];
const content = document.querySelector(".content");
const input = document.querySelector(".content input");
const btnRemoveAll = document.querySelector(".btn-remove-all");
function render() {
  let html = "";
  for (let i = 0; i < tags.length; i++) {
    html += `
        <div class="tag">
            <span>${tags[i]}</span>
            <i class="fa-solid fa-xmark" onclick="deleteTags(${i})"></i>
       </div>
        `;
  }
  content.innerHTML = html;
  content.appendChild(input);
}
render();

function deleteTags(i) {
  tags.splice(i, 1);
  render();
}

function addTag(value) {
  tags.push(value);
  render();
  input.value = "";
  input.focus();
}
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTag(input.value);
  }
});

btnRemoveAll.addEventListener("click", () => {
  tags = [];
  render();
});
