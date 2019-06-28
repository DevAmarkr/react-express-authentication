const mongoose = require("mongoose");
const key = require("./keys"); //key become an object
mongoose.Promise = global.Promise;

// mongoose.set("useCreateIndex", true);
mongoose
  .connect(key.mongodb.dbURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(" database connected"))
  .catch(err => console.log(" database not connected"));

module.exports = { mongoose };