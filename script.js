$(document).ready(function(){
  //$.getJSON("https://api.openweathermap.org/data")
  console.log("ready");
  if(navigator.geolocation)
    {
      console.log("here");
      navigator.geolocation.getCurrentPosition(function(pos){
        console.log("latitude: " + pos.coords.latitude + "<br>longitude: " + pos.coords.longitude);
      });
    }
})

//AIzaSyB0meAxHItFeYsIhRKBEBEe9I9dmbMfLbs
