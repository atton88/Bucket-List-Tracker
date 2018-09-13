// Import ORM functions that connect to the database
var orm = require("../config/orm.js")

// // create the code that will call the 
// // ORM functions using burger specific input for the ORM.

// Get all function
var list = {
    all: function(cb) {
        orm.all("bucketlist", function(res){
            cb(res);
        });
    }, 
    create: function(data, cb) {
        orm.create("bucketlist", data, function(res) {
            cb(res);
        });
    }
}


module.exports = list;