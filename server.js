// IMPORTS
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// DATABASE CONNECTION
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("DB connection success"))
  .catch((error) =>
    console.log("Error establishing a DB connection: " + error)
  );

// MIDDLEWARE
app.use(cors()); // CORS Support
app.use(express.json()); // Parse request with JSON payloads
app.use("/api", apiRoutes); // Router, begins with "/api"

// SERVER START
app.listen(PORT, () => console.log("Server started at port " + PORT));