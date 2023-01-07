const express = require("express");
const {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");
const router = express.Router();

router.route("/").get(getContact);
router.route("/:id").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

module.exports = router;
