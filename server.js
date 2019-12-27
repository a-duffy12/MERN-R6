// required imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// database config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db) // connect
  .then(() => console.log("MongoDB connected...")) // message upon successful connection
  .catch(err => console.log(err)); // message upon failed connection

// using the routes for the items
app.use("/api/items", items);

const port = process.env.PORT || 5000; // specify port

app.listen(port, () => console.log(`Server started on port ${port}`)); // message lisitng port in use
