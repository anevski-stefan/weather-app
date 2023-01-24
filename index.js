var input_box = document.querySelector("#weather_input");
var button = document.querySelector("#btn");
var clear_btn = document.querySelector("#btn-clear");
var API_KEY = "785aa7befe6c499090d1e3c6a2f7adbd";
var final = document.querySelector("#final");
final.style.display = "none";
clear_btn.style.display = "none";

button.addEventListener("click", function () {
  final.innerHTML = "";

  if (input_box.value.trim() !== "") {
    //make the request
    var BASEURL = "http://api.weatherbit.io/v2.0/current?city=";
    var finalURL = BASEURL + input_box.value + "&key=" + API_KEY;

    // Use the fetch API to make a GET request to the OpenWeatherMap API
    fetch(`${finalURL}`)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        input_box.value = "";
        // Do something with the data, such as display the forecast on the page
        final.innerHTML += "City: " + data["data"][0]["city_name"];
        final.innerHTML += "<br>Country " + data["data"][0]["country_code"];
        final.innerHTML += "<br>Clouds: " + data["data"][0]["clouds"] + "%";
        final.innerHTML += "<br>DateTime: " + data["data"][0]["datetime"];
        final.innerHTML += "<br>Sunrise: " + data["data"][0]["sunrise"];
        final.innerHTML += "<br>Sunset: " + data["data"][0]["sunset"];
        final.innerHTML += "<br>TimeZone: " + data["data"][0]["timezone"];
        final.innerHTML +=
          "<br>Weather description: " +
          data["data"][0]["weather"]["description"] +
          "<br>";
        final.innerHTML +=
          '<img class="icon_weather" src="https://www.weatherbit.io/static/img/icons/' +
          data["data"][0]["weather"]["icon"] +
          '.png">';
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
    final.style.display = "block";
    clear_btn.style.display = "block";
  }
});

clear_btn.addEventListener("click", function () {
  final.innerHTML = "";
  final.style.display = "none";
  clear_btn.style.display = "none";
});
