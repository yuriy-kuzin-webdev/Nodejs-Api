const express = require("express");
const router = express.Router();

router.route("api/contacts", (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});
