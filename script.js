// // "https://community-open-weather-map.p.rapidapi.com/?q=" +
// //   "atlanta" +
// //   "&apikey=1ad47af0b7msh04ed2b40a59c49dp1ecd9bjsn4fce9c9ae4fe";

$("#searchBtn").on("click", function () {
  var searchInput = $("#searchBox").val();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    searchInput +
    "&appid=b0346eaaabff07a925bd456a2c1cf5a6";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
  // getForecast();
});

// function getForecast() {
//   var searchInput = $("#searchBox").val();
//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/forecast?q=" +
//     searchInput +
//     "&appid=b0346eaaabff07a925bd456a2c1cf5a6";
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//   });
//   getUV();
// }

// function getUV() {
//   var searchInput = $("#searchBox").val();
//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/uvi?q=" +
//     searchInput +
//     "&appid=b0346eaaabff07a925bd456a2c1cf5a6&lat={" +
//     latitude +
//     "}&lon={" +
//     longitude +
//     "}";
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//   });
// }

////rework html for api--make correct calls--look at pics on phone
