const getContact = (req, res) => {
  res.status(200).json({ message: "get contact" });
};
const getContacts = (req, res) => {
  res.status(200).json({ message: "get contacts" });
};
const createContact = (req, res) => {
  res.status(200).json({ message: "Create contact" });
};
const updateContact = (req, res) => {
  res.status(200).json({ message: "Update contact" });
};
const deleteContact = (req, res) => {
  res.status(200).json({ message: "Delete contact" });
};
module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
