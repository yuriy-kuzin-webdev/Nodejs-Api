const asyncHandler = require("express-async-handler");

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get contact" });
});
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get contacts" });
});
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(200).json({ message: "Create contact" });
});
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update contact" });
});
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete contact" });
});
module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
