$(document).ready(function (){

    $(".btn").click(function(event) {
        event.preventDefault();
        var inputValue = $("#cityName").val();
    var urlName = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial" + "&appid=964304f976bc387e7c28396639c2f8d7";
        $.ajax({
            url: urlName,
            method: "Get",
            dataType: "jsonp",
            success: function(response){
                console.log(response)
                var currentWeather = show(response);
                var d = new Date();
                var localTime = d.getTime();
                var localOffset = d.getTimezoneOffset();
                var utc = localTime + localOffset;
                var date = new Date + utc;

                // show(response) = "<li>City Name: "+ inputValue + "</li>";
                $("#currentConditions").append(currentWeather);
                function show(response){
                    return "<li>City Name: "+ inputValue + "</li>" +
                $("#currentConditions").val(date);
                }
                            
            }
        });
    });
            
});