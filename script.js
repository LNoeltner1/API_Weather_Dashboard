// // "https://community-open-weather-map.p.rapidapi.com/?q=" +
// //   "atlanta" +
// //   "&apikey=1ad47af0b7msh04ed2b40a59c49dp1ecd9bjsn4fce9c9ae4fe";

$("#searchBtn").on("click", function () {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "," +
    "&appid=" +
    apiKey +
    "&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    $("#cityName").text(response.name + ", " + response.sys.country);
    $("#currentTemp").text("Temperature: " + response.main.temp + " Farenheit");
    $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
    $("#currentWind").text("Wind Speed: " + response.wind.speed + " MPH");
    $("#btnOne").text(response.name + ", " + response.sys.country);
    // $("#currentUV").text(response.wind.speed);
    // console.log(response.weather[0]);
  });
  getForeCast();
});

function getForeCast() {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    ",&appid=" +
    apiKey +
    "&units=imperial";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#oneTemp").text("Temp: " + response.list[3].main.temp + " F");
    $("#twoTemp").text("Temp: " + response.list[11].main.temp + " F");
    $("#threeTemp").text("Temp: " + response.list[19].main.temp + " F");
    $("#fourTemp").text("Temp: " + response.list[27].main.temp + " F");
    $("#fiveTemp").text("Temp: " + response.list[35].main.temp + " F");

    $("#oneHumidity").text("Humidity: " + response.list[3].main.humidity + "%");
    $("#twoHumidity").text(
      "Humidity: " + response.list[11].main.humidity + "%"
    );
    $("#threeHumidity").text(
      "Humidity: " + response.list[19].main.humidity + "%"
    );
    $("#fourHumidity").text(
      "Humidity: " + response.list[27].main.humidity + "%"
    );
    $("#fiveHumidity").text(
      "Humidity: " + response.list[35].main.humidity + "%"
    );
  });
  getUV();
}

function getUV() {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  // var latitude = response.city.coord.lat;
  // var longitude = response.city.coord.lon;
  var queryURL =
    "http://api.openweathermap.org/data/2.5/uvi?q=" +
    cityInput +
    ",&appid=" +
    apiKey +
    "&units=imperial";
  // + "&lat={" +
  // latitude +
  // "}&lon={" +
  // longitude +
  // "}";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // $("#currentUV").text(response);
    console.log(response);
  });
}

////rework html for api--make correct calls--look at pics on phone
