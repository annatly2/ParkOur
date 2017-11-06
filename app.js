$(document).ready(function(){

  function getLocation() {
    //Make sure the broswer supports the HTML 5 geolocation method.
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        //We may also have to set a default UserLatitute and UserLongtitude here to 
        //make sure we don't error out if the the browser does not support geolocation.
        console.log("Geolocation is not supported by this browser.");
    }
}


function setPosition(position) {
  UserLatitude = position.coords.latitude
  UserLongitude = position.coords.longitude;
  
}
    //Run the procedure to get the user's location.  
    //We need to to figure out what we are going to do if the user does not provide cordinates.
    //WE should probably set a default longitude and latitude.
    UserLatitude = 32.711652;
    UserLongitude = -117.161887;
    getLocation();

})


var newQueryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + UserLatitude + "," + UserLongitude + "&radius=8000&type=parking&key="+ newAPIkey;


//request you can put into postman
var postmanRequest = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.711652,-117.161887&radius=8000&type=parking&key=AIzaSyCnvwAzxz0QHE-3VbCv_odGXd8ThkidDvc";


$.ajax({
  url: newQueryURL, 
  method: "GET",
  dataType: "json"                 
}).done(function(response) {

  var name;

)}

//API KEY FOR Google places:

//var apiKey = "AIzaSyDGije4oEmFObRp1TQgyquNCJjeos9sq78";


var newAPIkey = "AIzaSyCnvwAzxz0QHE-3VbCv_odGXd8ThkidDvc";
