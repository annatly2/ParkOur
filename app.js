$(document).ready(function(){

  var UserLatitude;
  var UserLongitude;

  //asks users for their location
  function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        //if the the browser does not support geolocation
        console.log("Geolocation is not supported by this browser.");
    }
}

function setPosition(position) {
  UserLatitude = position.coords.latitude
  UserLongitude = position.coords.longitude;
  
}
    //default location is UCSD
    UserLatitude = 32.711652;
    UserLongitude = -117.161887;
    getLocation();

var newAPIkey = "AIzaSyCnvwAzxz0QHE-3VbCv_odGXd8ThkidDvc";

var newQueryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + UserLatitude + "," + UserLongitude + "&radius=8000&type=parking&key="+ newAPIkey;

//request you can put into postman to view the JSON object
var postmanRequest = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.711652,-117.161887&radius=8000&type=parking&key=AIzaSyCnvwAzxz0QHE-3VbCv_odGXd8ThkidDvc";

$.ajax({
  url: newQueryURL, 
  method: "GET",
  dataType: "json"                 
}).done(function(response) {
  var i = 0;
  var answerSelected = false;

  //loops through the entire request and prints the name and address in the console
  for(var i = 0; i < response.results.length; i ++){
    var name = response.results[i].name;
    var vicinity = response.results[i].vicinity;

    console.log(name);
    console.log(vicinity);

      //displays the last result on the html file.
    $("#name").html(name);
    $("#vicinity").html(vicinity);
  }
});

});
