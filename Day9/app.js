const inputSearch = document.querySelector(".searchWeather");
const cityElement = document.querySelector(".city");
const country = document.querySelector(".country");
const times = document.querySelector(".times");
const value = document.querySelector(".value");
const shortDetail = document.querySelector(".shortDetail");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const humanity = document.querySelector(".humanity span");
const body = document.querySelector("body");
async function callAPI(city) {
  const APIKey = "fa7c957d4bbe21de226af9a16194da51";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
  );
  const data = await res.json();
  if (data.cod == "200") {
    const dataCity = data.name;
    const dataContry = data.sys.country;
    const dataTimes = new Date().toLocaleString();
    const dataValue = Math.round(+data.main.temp - 273.15);
    const dataShortDetail = data.weather[0].main;
    const dataVisibility = data.visibility + "(m)";
    const dataWind = data.wind.speed + "(m/s)";
    const dataHuminity = data.main.humidity + "(%)";

    // Thêm giá trị vào element
    cityElement.innerText = dataCity;
    country.innerText = dataContry;
    times.innerText = dataTimes;
    value.innerText = dataValue;
    shortDetail.innerText = dataShortDetail;
    visibility.innerText = dataVisibility;
    wind.innerText = dataWind;
    humanity.innerText = dataHuminity;
    checkTemperature(+dataValue);
  } else {
    console.log(data);
  }
}

function checkTemperature(value) {
  console.log(value > 10 && value < 20);
  if (value >= 30) {
    body.setAttribute("class", "hot");
  }
  if (value >= 20 && value < 30) {
    body.setAttribute("class", "warn");
  }
  if (value >= 10 && value < 20) {
    body.setAttribute("class", "cool");
  }
  if (value < 10) {
    body.setAttribute("class", "cold");
  }
}

callAPI("Ho Chi Minh");
inputSearch.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    callAPI(inputSearch.value.trim());
  }
});
// Hot: 30 > deg C
// Warn : 20 -> 30 Deg c
// Cool : 10 -> 20 deg c
// Cold : 10 < deg c
