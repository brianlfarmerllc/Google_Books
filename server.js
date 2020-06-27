const express = require("express");

const mongoose = require("mongoose");
// --------- No Routes File Set Up Yet
// const routes = require("./routes"); ----------- Enable after settinh up routes
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view --------- No Routes File Set Up Yet
// app.use(routes); ----------- Enable after settinh up routes

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google_books");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
