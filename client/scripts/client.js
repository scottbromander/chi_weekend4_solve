var createdListing = {};

$(document).ready(function(){
  init();
});

function init(){
  getListings();
  enable(true);
}

function enable(value){
  if(value){
    $(".selectType").on("click", selectType);
    $("#submitListing").on("click", submitListing);
  }
}

function submitListing(){
  if(createdListing.type     === undefined ||
     $("#submitCity").val()  === "" ||
     $("#submitValue").val() === "" ||
     $("#submitSqft").val()  === "")
   {
     $("#error").text("ERROR: ENTER ALL INFORMATION TO SUBMIT LISTING");
     return;
   }

  createdListing.city = $("#submitCity").val();
  createdListing.sqft = $("#submitSqft").val();

  if(createdListing.type === "house"){
    createdListing.cost = $("#submitValue").val();
    postHouse(createdListing);
  } else if(createdListing.type === "apartment"){
    createdListing.rent = $("#submitValue").val();
    postApartment(createdListing);
  }

  $("#submitCity").val("");
  $("#submitValue").val("");
  $("#submitSqft").val("");
  $(".selectType").removeClass("highlight");
  createdListing = {};
  $("#error").text("");
}

function selectType(){
  $(".selectType").removeClass("highlight");
  $(this).addClass("highlight");
  createdListing.type = $(this).data("type");
}

function appendListings(array){
  $("#listingContainer").empty();
  for(var i = array.length - 1; i >= 0; i--){
    $("#listingContainer").append("<div class='row listing'></div>");
    var $el = $("#listingContainer").children().last();
    appendListing(array[i], $el);
  }
}

function appendListing(listing, $el){
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

function getListings(){
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
      appendListings(response);
    }
  });
}

function postHouse(data){
  $.ajax({
    type: "POST",
    url: "/listings/house",
    data: data,
    success: function(response){
      getListings();
    }
  });
}

function postApartment(data){
  $.ajax({
    type: "POST",
    url: "/listings/apartment",
    data: data,
    success: function(response){
      getListings();
    }
  });
}
