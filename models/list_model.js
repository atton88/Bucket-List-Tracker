// Import ORM functions that connect to the database
var orm = require("../config/orm.js")

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
    toggle: function(id, data, cb) {
        orm.update("bucketlist", id, data, function(res) {
            cb(res);
        });
    },
    delete:function(id, cb){
        orm.delete("bucketlist", id, function(res) {
            cb(res);
        })
    }}


module.exports = list;