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
                $("$currentConditions").html(currentWeather);
            }
        });
    });
            function show(response)
                return "<li>City Name: + inputValue</li>" + 
            
});