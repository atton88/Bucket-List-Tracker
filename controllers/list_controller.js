var express = require("express");
var list = require("../models/list_model.js")

var router = express.Router();

// Import list model to use its functions that connect to the ORM and database
var list = require("../models/list_model.js");

// Routes



// Catch all, goes to index page after receiving list data
router.get("*", function(req, res){
    list.all(function(data) {
        var listData = {
            list: data
        };
        console.log("Received Data:")
        console.log(listData);
        res.render("index", listData);

    })
});

// Adds new list item
router.post("/api/list", function(req, res){
    list.create(req.body, function(data) {
    res.json({id: data.insertId});
    });
});
// router.post()

// Moves to completed
// router.put()

module.exports = router;
