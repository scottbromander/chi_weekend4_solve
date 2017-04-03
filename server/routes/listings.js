var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// var ApartmentSchema = mongoose.Schema({
//   rent : Number,
//   sqft : Number,
//   city : String
// });

// var Apartments = mongoose.model("Apartments", ApartmentSchema);
// var Houses = mongoose.model("Houses", HouseSchema);
var Listings = mongoose.model("Listings");

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
