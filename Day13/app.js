const inputFile = document.querySelector("#myPicture");
const label = document.querySelector("label");
const errorMessage = document.querySelector("h2");
inputFile.addEventListener("change", (e) => {
  const file = inputFile.files[0];

  //   if (!file.name.endsWith(".png")) {
  //     errorMessage.innerText = "Bạn cần chọn ảnh png";
  //     return;
  //   }

  if (file.size / (1024 * 1024) > 5) {
    errorMessage.innerText = "Bạn cần chọn ảnh dưới 5mb";
    return;
  }
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  label.appendChild(img);
});
