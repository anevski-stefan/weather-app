var input_box = document.querySelector("#weather_input");
var button = document.querySelector("#btn");
var API_KEY = "key=785aa7befe6c499090d1e3c6a2f7adbd";
var final = document.querySelector("#final");

button.addEventListener("click", function () {
  var BASEURL = "https://api.weatherbit.io/v2.0/current?";

  var finalURL = BASEURL + "city=" + input_box.value + "&" + API_KEY;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", finalURL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      // Process the response data
      var data = JSON.parse(xhr.responseText);
      console.log(data);

      final.innerHTML += "City: " + data["data"][0]["city_name"] + "<br>";
      final.innerHTML +=
        "Weather description: " +
        data["data"][0]["weather"]["description"] +
        "<br>";
      final.innerHTML += "Sunrise: " + data["data"][0]["sunrise"] + "<br>";
      final.innerHTML += "Sunset: " + data["data"][0]["sunset"] + "<br>";
      final.innerHTML += "Temp: " + data["data"][0]["temp"] + "<br>";
      final.innerHTML += "Time-zone: " + data["data"][0]["timezone"];
    }
  };
});
