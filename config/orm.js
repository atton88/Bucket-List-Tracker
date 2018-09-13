//create the methods that will execute the necessary MySQL commands 
//in the controllers. These are the methods you will need to use in 
//order to retrieve and store data in your database.

// selectAll()

//insertOne()

//updateOne()

// Import MySQL connection information
var connection = require("./connection.js");

// ORM object with CRUD functions to interact with MySQL database
var orm = {
    all: function(tableName, cb) {
        connection.query("SELECT * FROM " + tableName, function(err, result) {
            if (err) throw err;
            console.log("GET results:")
            console.log(result);
            cb(result)
        })
    },
    create: function(tableName, data, cb) {
        var queryString = "INSERT INTO " + tableName + " (item) VALUES ('" + data.item + "');"
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log("CREATE results:")
            console.log(result);
            cb(result)
        })
    },
    update: function(tableName, id, data, cb) {
        var queryString = "UPDATE " + tableName + " SET completed = '" + data + "' WHERE (id = '" + id + "')"
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log("UPDATE results:")
            console.log(result);
            cb(result)
        })
    }}


module.exports = orm;