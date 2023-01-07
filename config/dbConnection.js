const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
