// Import ORM functions that connect to the database
var orm = require("../config/orm.js")

// // create the code that will call the 
// // ORM functions using burger specific input for the ORM.

// Get all function
var list = {

    // gets information of all entries and sends back to client
    all: function(cb) {
        orm.all("bucketlist", function(res){
            cb(res);
        });
    }, 

    // creates list item, sends data to orm.create
    create: function(data, cb) {
        orm.create("bucketlist", data, function(res) {
            cb(res);
        });
    }, 
    // toggles the completed state of list item
    toggle: function(value, condition, cb) {
        orm.update("bucketlist", condition, function(res) {
            cb(res);
        });
    }}


module.exports = list;