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
                var currentWeather = show(response, inputValue,d);
                $("#currentConditions").append(currentWeather);
            }
        });
    });
    function show(response,inputValue,d,urlName) {
        return "<li>City Name: " + inputValue + "</li>" +
            "<li>Date: " + d + "</li>"; 
    }
    $('#wicon').attr('src', urlName);
});