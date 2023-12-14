const inputElement = document.querySelector(".header-todolist input");
const ulElement = document.querySelector(".content-todolist");
const btnAdd = document.querySelector(".header-todolist button");
const list = ["NodeJs", "ReactJs"];

function renderList(arrayList) {
  let html = "";
  arrayList.forEach((item, i) => {
    html += `
            <li>
                <p onclick='toggleActive(event)'>${item}</p>
                <i onclick='deleteList(${i})' class="fa-regular fa-trash-can"></i>
            </li>
        `;
  });
  ulElement.innerHTML = html;
}
function toggleActive(event) {
  const pElement = event.target;
  pElement.classList.toggle("active");
}

function deleteList(i) {
  list.splice(i, 1);
  renderList(list);
}

function addList(value) {
  list.push(value);
  renderList(list);
  inputElement.value = "";
  inputElement.focus();
}
renderList(list);

inputElement.addEventListener("keydown", (e) => {
  if (e.target.value) {
    if (e.code == "Enter") {
      addList(e.target.value);
    }
  }
});

btnAdd.addEventListener("click", () => {
  if (inputElement.value.trim()) {
    addList(inputElement.value);
  }
});
