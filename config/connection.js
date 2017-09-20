var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  ///Functions to run

});

module.exports = connection;
