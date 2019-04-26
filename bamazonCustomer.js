var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection to overcome Error: ER_NOT_SUPPORTED_AUTH_MODE
var connString = 'mysql://myuser:mypass@myhost/mdb?charset=utf8_general_ci&timezone=-0700';
var conn = mysql.createConnection(connString);

// create the connection information for the sql database
var connection = mysql.createConnection({
host: "localhost",

port: 8889,
user: "root",
password: "root",
database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
if (err) throw err;
console.log("connection successful!");
});
