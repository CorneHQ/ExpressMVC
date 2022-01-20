const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/example.controller");

router.get("/", exampleController.samplePage);
router.get("/mail", exampleController.sendMail);

module.exports = {
  prefix: "/example",
  router: router,
};
