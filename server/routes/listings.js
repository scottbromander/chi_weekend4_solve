var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ListingSchema = mongoose.Schema({});

var ApartmentSchema = mongoose.Schema({
  rent : Number,
  sqft : Number,
  city : String
});

var HouseSchema = mongoose.Schema({
  cost : Number,
  sqft : Number,
  city : String
});

var Listings = mongoose.model("listings", ListingSchema, "listings");
var Apartments = mongoose.model("apartments", ApartmentSchema, "listings");
var Houses = mongoose.model("houses", HouseSchema, "listings");

router.get("/", function(req,res){
  Listings.find({}, function(err, listings){
    if(err){
      console.log("Mongo Error: ", err);
      res.send(500);
    }

    res.send(listings);
  });
});

router.post("/house", function(req,res){
  var listing = req.body;
  var newHouse = new Houses({
    city : listing.city,
    sqft : listing.sqft,
    cost : listing.cost
  });

  newHouse.save(newHouse, function(err, savedHouse){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }

    res.send(savedHouse);
  });
});

router.post("/apartment", function(req,res){
  var listing = req.body;
  var newApartment = new Apartments({
    city : listing.city,
    sqft : listing.sqft,
    rent : listing.rent
  });

  newApartment.save(newApartment, function(err, savedApartment){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }

    res.send(savedApartment);
  });
});

router.put("/", function(req,res){

});

router.delete("/", function(req,res){

});

module.exports = router;
