const mongoose = require("mongoose");

const DB_connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DB_connect;
