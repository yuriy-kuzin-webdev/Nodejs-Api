const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "add the name"] },
    email: { type: String, required: [true, "add the email"] },
    phone: { type: String, required: [true, "add the phone"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
