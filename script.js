$("#searchBtn").on("click", function () {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
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
    $("#cityName").text(
      response.name +
        ", " +
        response.sys.country +
        "  | |  " +
        moment().format("LLLL")
    );

    // for (var i = 0; i < cityList.length; i++) {
    console.log(response);
    //   cityList = push("cityInput");
    // }
    $("#btnOne").text(cityInput + ", " + response.sys.country);
    $("#btnTwo").text($("#btnOne").val());
    $("#btnThree").text($("#btnTwo").val());

    $("#currentTemp").text("Temperature: " + response.main.temp + " Farenheit");
    $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
    $("#currentWind").text("Wind Speed: " + response.wind.speed + " MPH");

    $("#dateDay1").text(moment().add(1, "days").format("l"));
    $("#dateDay2").text(moment().add(2, "days").format("l"));
    $("#dateDay3").text(moment().add(3, "days").format("l"));

    // cloudIcon = "fas fa-cloud";
    // sunIcon = "far fa-sun";
    // rainIcon = "fas fa-cloud-rain";
    // moonIcon = "far fa-moon";
    // coldIcon = "far fa-snowflake";
    // if (response.sys.sunrise < response.coord.dt < response.sys.sunset) {
    //   $("#conditionsIcon0").addClass("'"+sunIcon+"'")
    //   else if (response.sys.sunrise > response.coord.dt > response.sys.sunset) {
    //     $("#conditionsIcon0").addClass("'"+moonIcon+"'")
    // };

    localStorage.setItem("cityInput", JSON.stringify(cityInput));
    var cityList = JSON.parse(localStorage.getItem("cityInput"));
    cityList.unshift("cityInput");
  });
  // $("#currentUV").text(response.wind.speed);
  // console.log(response.weather[0]);
  getForeCast();
});

function getForeCast() {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
    getUV(response.city.coord.lat, response.city.coord.lon);
  });
}

function getUV(latitude, longitude) {
  var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
  var cityInput = $("input").val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/uvi?q=" +
    cityInput +
    "&appid=" +
    apiKey +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // $("#currentUV").text(response);
    console.log(response);
    $("#currentUV").text("UV Index: " + response.value);
    // if (response.value > 7) {
    //   $("#currentUV").innerHighlight(red);
    // } else if (4 < response.value < 7) {
    //   $("#currentUV").innerHighlight(yellow);
    // } else {
    //   $("#currentUV").innerHighlight(red);
    // }
  });
}

$("#btnOne").on("click", function () {
  cityInput = $("#btnOne").text();
});
