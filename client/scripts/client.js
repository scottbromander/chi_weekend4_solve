$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
      appendListings(response);
    }
  });
});

function appendListings(array){
  $("#listingContainer").empty();
  for(var i = 0; i < array.length; i++){
    $("#listingContainer").append("<div class='row listing'></div>");
    var $el = $("#listingContainer").children().last();
    appendListing(array[i], $el);
  }
}

function appendListing(listing, $el){
  //append a house
  if(listing.cost){
    $el.append("<div class='lead col-md-3 listing-head'>House for Sale </div>");
    $el.append("<div class='lead col-md-3'>" + listing.city + " </div>");
    $el.append("<div class='lead col-md-3'>$" + listing.cost + " </div>");
    $el.append("<div class='lead col-md-3'>" + listing.sqft + " sqft.</div>");
  } else if(listing.rent){
    $el.append("<div class='lead col-md-3'>Apartment for Rent </div>");
    $el.append("<div class='lead col-md-3'>" + listing.city + " </div>");
    $el.append("<div class='lead col-md-3'>$" + listing.rent + " </div>");
    $el.append("<div class='lead col-md-3'>" + listing.sqft + " sqft.</div>");
  }
}
