const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET /api/programs
router.get("/", (req, res) => {
  Controllers.programController.getProgram(res);
});

// POST /api/programs/create
router.post("/create", (req, res) => {
  Controllers.programController.createProgram(req.body, res);
});

// PUT /api/programs/update/:id
router.put("/update/:programId", (req, res) => {
  Controllers.programController.updateProgram(req, res);
});

// DELETE /api/programs/delete/:id
router.delete("/delete/:programId", (req, res) => {
  Controllers.programController.deleteProgram(req, res);
});

module.exports = router;