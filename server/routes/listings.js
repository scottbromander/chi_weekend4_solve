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

router.post("/", function(req,res){

});

router.put("/", function(req,res){

});

router.delete("/", function(req,res){

});

module.exports = router;
