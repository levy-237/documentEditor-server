const mongoose = require("mongoose");

const document = new mongoose.Schema({
  _id: String,
  data: Object,
});
module.exports = mongoose.model("document", document);
