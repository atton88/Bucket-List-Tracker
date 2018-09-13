var express = require("express");
var list = require("../models/list_model.js")

var router = express.Router();

// Import list model to use its functions that connect to the ORM and database
var list = require("../models/list_model.js");

// ROUTES

// Adds new list item, calls create function in list model
router.post("/api/list", function(req, res){
    list.create(req.body, function(data) {
    res.json({id: data.insertId});
    });
});

// Updates item to completed/uncompleted, calls toggle function in list model
router.put("/api/list/:id", function(req, res) {

    // MySQL condition to find specific id
    console.log(req.body.completed)
    list.toggle(req.params.id, req.body.completed, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  // Deletes selected item, calls delete function in list model
  router.delete("/api/list/:id", function(req, res) {

    // MySQL condition to find specific id
    list.delete(req.params.id, function(result) {
        console.log(result);
    //   if (result.changedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
        res.status(200).end();
      })
    // });
  });

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

module.exports = router;
