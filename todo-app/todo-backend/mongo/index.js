const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const { MONGO_URL } = require("../util/config");

if (MONGO_URL && !mongoose.connection.readyState)
  mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected");
    })
    .catch((e) => {
      console.log("cannot connect", e);
    });

module.exports = {
  Todo,
};
