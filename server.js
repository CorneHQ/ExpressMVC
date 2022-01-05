// Parse .env variables into the process
require("dotenv").config();

// Imports
const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database.config");
const appConfig = require("./config/app.config");
const logger = require("./libs/logger.libs")

// Global variables
const app = express();

// Need to have middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuration of the template engine
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

// Load Middleware
const middlewarePath = path.join(__dirname, "middleware");
fs.readdirSync(middlewarePath).forEach((file) => {
  app.use(require("./middleware/" + file));
});

// Load Routes
const routePath = path.join(__dirname, "routes");
fs.readdirSync(routePath).forEach((file) => {
  const routeObject = require("./routes/" + file);
  app.use(routeObject.prefix, routeObject.router);
});

// Connect to the MongoDB database
mongoose.connect(databaseConfig.connectionString, databaseConfig.options);
const db = mongoose.connection;
db.on("error", (error) => {
  logger.danger("Connection with the MongoDB server failed: " + error)
  console.error(error)
});
db.once("open", () => {
  logger.info("Connected to the MongoDB server")
  console.log("Connected to MongoDB");
});

app.listen(appConfig.port, () => {
  logger.info("App started on port " + appConfig.port)
  console.log("App is listening on port " + appConfig.port);
});
