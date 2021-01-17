$(document).ready(function(){

$(".btn").click(function(){

var inputValue = $("#cityName").val("");
console.log(inputValue)
var urlName = "https://api.openweathermap.org/data/2.5/weather?q=" + "&inputValue" + "&appid=964304f976bc387e7c28396639c2f8d7"
console.log(urlName)
$.ajax({
url: "urlName",
method: "Get",
success: function(result){
    $("#subject").html(result);

}});


});
});