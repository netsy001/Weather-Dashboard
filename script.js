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
                var latitude = response.coord.lat;
                var uv = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=964304f976bc387e7c28396639c2f8d7";
                var currentWeather = show(response, inputValue, d, uv);
                var iconcode = response.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#currentConditions").append(currentWeather);
                $('#wicon').attr("src", iconurl);
            }
        });
    });
    function show(response, inputValue, d, uv) {
        return "<p><b>City Name: " + inputValue + "</b></p>" +
            "<p>Date: " + d + "</p>" +
            "<p>Temperature: " + response.main.temp + "</p>" +
            "<p>Humidity: " + response.main.humidity + "</p>" +
            "<p>Wind speed: " + response.wind.speed + "</p>" +
            "<p>UV index: " + uv + "</p>";
    }

});