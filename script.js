$(document).ready(function () {
    $(".btn").click(function (event) {
        event.preventDefault();
        var inputValue = $("#cityName").val();
        var urlName = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial" + "&appid=964304f976bc387e7c28396639c2f8d7";
        $.ajax({
            url: urlName,
            method: "Get",
            dataType: "jsonp",
            success: function (response) {
                var d = moment(response.dt, 'X').utcOffset(response.timezone / 60).format('MMMM Do YYYY');
                var longitude = response.coord.lon;
                var currentWeather = show(response, inputValue, d);
                var iconcode = response.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#currentConditions").append(currentWeather);
                $('#wicon').attr("src", iconurl);
                var latitude = response.coord.lat;
                var longitude = response.coord.lon;
                var uv = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=964304f976bc387e7c28396639c2f8d7";
                $.ajax({
                    url: uv,
                    method: "Get",
                    mode: 'cors',
                    dataType: "json",
                }).then(function (result) {
                    var uvindex = result.value;
                    $("#currentConditions").append("UV Index: " + uvindex);
                });
            }
        });
        function show(response, inputValue, d) {
            return "<p><b>City Name: " + inputValue + "</b></p>" +
                "<p>Date: " + d + "</p>" +
                "<p>Temperature: " + response.main.temp + "</p>" +
                "<p>Humidity: " + response.main.humidity + "</p>" +
                "<p>Wind speed: " + response.wind.speed + "</p>";
        }
        var fiveUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputValue + "&units=imperial" + "&appid=964304f976bc387e7c28396639c2f8d7";
        $.ajax({
            url: fiveUrl,
            method: "Get",
            dataType: "jsonp",
            cnt: "5",
            success: function (data) {
                var fiveDayForcast = "";
                console.log(data)
                fiveDayForcast += "<h2>" + data.city.name + "</h2>"; // City (displays once)
                $.each(data.list, function(index, val) {
                  fiveDayForcast += "<p>" // Opening paragraph tag
                  fiveDayForcast += "<b>Day " + index + "</b>: " // Day
                  fiveDayForcast += val.main.temp + "&degC" // Temperature
                  fiveDayForcast += "<span> | " + val.weather[0].description + "</span>"; // Description
                  fiveDayForcast += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
                  fiveDayForcast += "</p>" // Closing paragraph tag
                });
                $("#futureConditions").html(fiveDayForcast);
              }
        });
    });
});