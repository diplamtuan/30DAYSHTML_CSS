// https://fakestoreapi.com/products
const products = document.querySelector(".products");
const searchInput = document.querySelector(".searchInput input");
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    loadData(data);
  });

function loadData(array) {
  let html = "";
  array.forEach((item) => {
    html += `
        <div class="product">
            <img src=${item.image} alt="" />
            <div class="info">
            <p class="name">${item.title}</p>
            <p class="price">$${item.price}</p>
            </div>
      </div>
        `;
  });
  products.innerHTML = html;
}

searchInput.addEventListener("input", (e) => {
  let text = e.target.value.trim().toLowerCase();
  const productsDOM = document.querySelectorAll(".product");
  productsDOM.forEach((product) => {
    if (product.innerText.toLowerCase().includes(text)) {
      product.classList.remove("hide");
    } else {
      product.classList.add("hide");
    }
  });
});
