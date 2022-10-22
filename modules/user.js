const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  token: { type: String },
  confirm_password: { type: String },
});

const USER = mongoose.model("USER", userSchema);

module.exports = USER;
