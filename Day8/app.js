const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cfPassword = document.querySelector("#confirmpassword");
const form = document.querySelector("form");
let arrayInput = [username, email, password, cfPassword];
inputTyping(arrayInput);
inputOnBlur(arrayInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = [];
  arrayInput.forEach((input) => {
    input.value = input.value.trim();
    // Xử lí chung cho mọi input
    if (
      input.id == "username" ||
      input.id == "email" ||
      input.id == "password" ||
      input.id == "confirmpassword"
    ) {
      var isCheckEmtpy = checkInputEmtpy(input);
    }

    // Xử lí chung cho username
    if (input.id == "username") {
      if (isCheckEmtpy) {
        let isCheckLength = checkInputLength(input, 6, 10);
        console.log(isCheckLength);
        if (isCheckLength) {
          console.log("username");
          result.push({
            [input.id]: input.value,
          });
        }
      }
    }
    // Xử lí cho trường email
    if (input.id == "email") {
      if (isCheckEmtpy) {
        let isCheckEmail = checkEmail(input);
        if (isCheckEmail) {
          result.push({
            [input.id]: input.value,
          });
        }
      }
    }

    // Xử lí cho trường password
    if (input.id == "password") {
      if (isCheckEmtpy) {
        let isCheckLength = checkInputLength(input, 6, 20);
        if (isCheckLength) {
          result.push({
            [input.id]: input.value,
          });
        }
      }
    }

    // Xử lí cho trường confirmPassword
    if (input.id == "confirmpassword") {
      if (isCheckEmtpy) {
        let isCheckCfPassword = checkCfPassword(password, input);
        if (isCheckCfPassword) {
          result.push({
            [input.id]: input.value,
          });
        }
      }
    }
  });
  if (result.length == arrayInput.length) {
    console.log(result);
  }
});

function checkInputEmtpy(input) {
  // Xử lí đầu vào
  input.value = input.value.trim();
  if (!input.value) {
    return showError(input, "Không được để trường này trống");
  }
  return showSuccess(input);
}

function checkCfPassword(inputPassword, inputCfPassword) {
  inputPassword.value = inputPassword.value.trim();
  inputCfPassword.value = inputCfPassword.value.trim();
  if (inputPassword.value == inputCfPassword.value) {
    return showSuccess(inputCfPassword);
  } else {
    return showError(inputCfPassword, "Mật khẩu nhập lại chưa chính xác");
  }
}
function showError(input, message) {
  let parentInput = input.parentElement;
  let errorMessage = parentInput.querySelector("small");
  parentInput.classList.add("error");
  errorMessage.innerText = message;
  return false;
}

function showSuccess(input) {
  let parentInput = input.parentElement;
  let errorMessage = parentInput.querySelector("small");
  parentInput.classList.remove("error");
  errorMessage.innerText = "";
  return true;
}

function inputTyping(arrayInput) {
  arrayInput.forEach((input) => {
    input.addEventListener("input", () => {
      return showSuccess(input);
    });
  });
}

function inputOnBlur(arrayInput) {
  arrayInput.forEach((input) => {
    input.addEventListener("blur", () => {
      input.value = input.value.trim();
      // Xử lí chung cho mọi input
      if (
        input.id == "username" ||
        input.id == "email" ||
        input.id == "password" ||
        input.id == "confirmpassword"
      ) {
        var isCheckEmtpy = checkInputEmtpy(input);
      }

      // Xử lí chung cho username
      if (input.id == "username") {
        if (isCheckEmtpy) {
          let isCheckLength = checkInputLength(input, 6, 10);
        }
      }
      // Xử lí cho trường email
      if (input.id == "email") {
        if (isCheckEmtpy) {
          let isCheckEmail = checkEmail(input);
        }
      }

      // Xử lí cho trường password
      if (input.id == "password") {
        if (isCheckEmtpy) {
          let isCheckLength = checkInputLength(input, 6, 20);
        }
      }

      // Xử lí cho trường confirmPassword
      if (input.id == "confirmpassword") {
        if (isCheckEmtpy) {
          let isCheckCfPassword = checkCfPassword(password, input);
        }
      }
    });
  });
}

function checkInputLength(input, min, max) {
  // Xử lí đầu vào input
  input.value = input.value.trim();
  if (input.value.length < min) {
    return showError(input, `Không được it hơn ${min} kí tự`);
  } else if (input.value.length > max) {
    return showError(input, `Không được nhiều hơn ${max} kí tự`);
  } else {
    return showSuccess(input);
  }
}

// Check email
function checkEmail(input) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  input.value = input.value.trim();
  if (regex.test(input.value)) {
    return showSuccess(input);
  } else {
    return showError(input, "Email không hợp lệ");
  }
}
