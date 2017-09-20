var mysql = require('mysql');
var connection;

// var connection = mysql.createConnection({
//   host: "localhost",
//   // Your username
//   user: "root",
//   // Your password
//   password: "root",
//   database: "burgers_db"
// });

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:"xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o7apxvruzwnfwvvh",
    password: "cap8qpl60dj1omo7"
  });
}

connection.connect(function(err) {
  if (err) throw err;
  ///Functions to run
  

});

module.exports = connection;
