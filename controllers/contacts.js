const async = require("express-async-handler");

const getContact = async (req, res) => {
  res.status(200).json({ message: "get contact" });
};
const getContacts = async (req, res) => {
  res.status(200).json({ message: "get contacts" });
};
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(200).json({ message: "Create contact" });
};
const updateContact = async (req, res) => {
  res.status(200).json({ message: "Update contact" });
};
const deleteContact = async (req, res) => {
  res.status(200).json({ message: "Delete contact" });
};
module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
