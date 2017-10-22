$(document).ready(function(){
  if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(pos){
        console.log("obtained location");
        var latlongstr = pos.coords.latitude + "," + pos.coords.longitude;
        $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latlongstr + "&key=AIzaSyB0meAxHItFeYsIhRKBEBEe9I9dmbMfLbs", function(json)
        {
          if(json.status == "OK") console.log("results returned");
          else console.log("error: " + JSON.stringify(json.status));
          console.log(json);
          var name = json.results[0]["address_components"];
          for(i in name) if(name[i].types[0] == "locality") console.log(name[i]);              
        });
      });
    }
  else console.log("could not obtain location");
})

//AIzaSyB0meAxHItFeYsIhRKBEBEe9I9dmbMfLbs googlemaps

