$(document).ready(function(){
  if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(pos){
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude + "&APPID=a8abd2b0a72ed937ddbcbd43fceeb2cc", function(json)
          {
            var cel = parseFloat(json.main.temp) - 273.15;
            var far = cel * 1.8 + 32;

            $("#loc").text(json.name);
            $("#feels").text(json.weather[0].main);
            $("#temp").text(cel.toFixed(2) + " Celsius");
            $("#icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

            document.querySelector("input[type=checkbox]").addEventListener("change", function()
            {
              if($("#ff").prop('checked')) $("#temp").text(far.toFixed(2) + " " + "Farenheit");
              else $("#temp").text(cel.toFixed(2) + " " + "Celsius");
            });
          });
      });
    }
  else console.log("could not obtain location");
})

//a8abd2b0a72ed937ddbcbd43fceeb2cc openweathermaps

