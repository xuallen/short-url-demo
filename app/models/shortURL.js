var mongoose = require("mongoose");
var ShortURLSchema = require("../schemas/shortURL");
var ShortURL = mongoose.model("ShortURL", ShortURLSchema);

module.exports = ShortURL;