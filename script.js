const apiKey = "b24860d14810f6d1dc859b0c3e73c84a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    const weathericon = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Clouds") {
      weathericon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "weather-app-img/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
