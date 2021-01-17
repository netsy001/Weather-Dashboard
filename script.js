$(document).ready(function () {

    $(".btn").click(function() {
        var inputValue = $("#cityName").val();
        console.log(inputValue)
        // var urlName = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial" + "&appid=964304f976bc387e7c28396639c2f8d7";
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial" + "&appid=964304f976bc387e7c28396639c2f8d7",
            method: "Get",
            dataType: "jsonp",
            success: function(response){
                console.log(response)

            }
        });
    });


});