function displayWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let cityElement = document.querySelector("h3");
  let iconElement = document.querySelector("#icon");
  let descriptionElement = document.querySelector(".description");
  
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  
  descriptionElement.innerHTML = response.data.weather[0].description;
}

function search(city) {
  let apiKey = "0cd16c5610dcc1e0cd19a7e3888cdfa4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function pickCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#info-form");
  search(cityInput.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

search("New York");


let now = new Date();

let date = now.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let currentMonth = months[now.getMonth()];
let currentHour = now.getHours();
if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

let h1 = document.querySelector("h1");
h1.innerHTML = `${currentMonth} ${date}`;

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentHour}:${currentMinute}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", pickCity);


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);