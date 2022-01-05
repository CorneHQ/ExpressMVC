const mongoose = require("mongoose");
const exampleSchema = require("../schemas/example.schema");

module.exports = mongoose.model("Example", exampleSchema);
