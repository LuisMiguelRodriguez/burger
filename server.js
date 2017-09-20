var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var routes = require('./controllers/burgers_controller.js');

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(port, function(){
  console.log("Running on port " + port);
});
