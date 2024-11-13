const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.render("index", { contacts: contacts });
});

// @desc View add contact form
// @route GET /contacts/add
const addContactForm = asyncHandler((req, res) => {
  res.render("add");
});

// @desc Create a contact
// @route POST /contacts/add
const createContact = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { name, email, phone } = req.body;
  const contact = Contact.create({
    name,
    email,
    phone,
  });
  res.redirect("/");
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update", { contact: contact });
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );
  res.redirect("/");
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.redirect("/");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
};
