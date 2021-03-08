function displayWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let cityElement = document.querySelector("h3");
  let descriptionElement = document.querySelector(".description");
  
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement = response.data.weather[0].description;
}
  
let apiKey = "0cd16c5610dcc1e0cd19a7e3888cdfa4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  
axios.get(apiUrl).then(displayWeather);

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
let currentMinute = now.getMinutes();

let h1 = document.querySelector("h1");
h1.innerHTML = `${currentMonth} ${date}`;

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentHour}:${currentMinute}`;

