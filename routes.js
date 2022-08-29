// IMPORTS
const cors       = require('cors')
const express    = require("express");
const controller = require("./controller.js");

// ROUTER
const router = express.Router();

// API REST CRUD END-POINTS

// ~ NOTES ~
router.get    ("/notes",      cors(), controller.readNotes);   // Read All
router.get    ("/note/:id",  cors(), controller.readNote);    // Read
router.delete ("/note/:id",  cors(), controller.deleteNote);  // Delete
router.put    ("/note/:id",  cors(), controller.updateNote);  // Update
router.post   ("/note",      cors(), controller.createNote);  // Create

// EXPORT ROUTER
module.exports = router;