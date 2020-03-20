const PORT = process.env.PORT || 3001;

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") 
{
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


// Start the API server
app.listen(PORT, function() 
{
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//FOR SQL VERSION
//const db = require("./models");
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);
//db.sequelize.sync({ force: true }).then(function() {app.listen(PORT, function() {console.log("App listening on PORT " + PORT)})});
