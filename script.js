$(document).ready(function() 
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(function(pos) 
    {
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude + "&APPID=a8abd2b0a72ed937ddbcbd43fceeb2cc", function(json) 
      // $.getJSON("https://api.myjson.com/bins/tz7g9", function(json)
      {
        var cel = parseFloat(json.main.temp) - 273.15;
        var far = cel * 1.8 + 32;

        $("#loc").text(json.name);
        $("#feels").text(json.weather[0].main);
        $("#temp").text(cel.toFixed(2) + " C");

        document.querySelector("input[type=checkbox]").addEventListener("change", function() 
        {
          if ($("#ff").prop('checked')) 
            $("#temp").text(far.toFixed(2) + " " + "F");
          else 
            $("#temp").text(cel.toFixed(2) + " " + "C");
        });

        var status = json.weather[0].id;

        //extreme weather
        if(status >= 900)
          document.body.style.backgroundImage = 'linear-gradient(to left, #899a9f, #7d7d7d, #664622, #3b3b3b)';

        //overcast sky
        else if(status > 800)
          document.body.style.backgroundImage = 'linear-gradient(to left, #c6eeff, #a6dfff, #f3f3f3, #e4e4e4)';

        //clear weather
        else if (status == 800)
          document.body.style.backgroundImage = 'linear-gradient(to left, #9be8ff, #5bc9ff, #00b8ff, #feff50)';

        //smokey
        else if(status >= 700)
          document.body.style.backgroundImage = 'linear-gradient(to left, #b5b5b5, #a9bad4, #d0d0ce, #d1e0f7)';

        //snow
        else if(status >= 600)
          document.body.style.backgroundImage = 'linear-gradient(to left, #ffffff, #e5e5e5, #94d3e1, #93ccea)';

        //rain
        else if(status >= 500)
          document.body.style.backgroundImage = 'linear-gradient(to left, #4a6583, #6c8094, #4e6881, #697a8c)';

        //drizzle
        else if(status >= 300)
          document.body.style.backgroundImage = 'linear-gradient(to left, #cdffd0, #b7ece8, #add7e3, #a9d4e5)';

        //thunderstorm
        else if(status >= 200)
          document.body.style.backgroundImage = 'linear-gradient(to left, #2d3656, #273440, #2fced2 , #16171c)';
      });
    });
  } 
  else console.log("Could not obtain location");
});

// a8abd2b0a72ed937ddbcbd43fceeb2cc openweathermaps

// json mockups
// >= 900 p5lg9
// >  800 
// == 800 qcgnt
// >= 700 18swex
// >= 600 1fy3o9
// >= 500 1ghe49
// >= 300 heyl5
// >= 200 tz7g9