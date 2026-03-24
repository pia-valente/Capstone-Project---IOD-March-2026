const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET /api/memberPrograms
router.get("/", (req, res) => {
  Controllers.memberProgramController.getMemberProgram(res);
});

// POST /api/memberPrograms/create
router.post("/create", (req, res) => {
  Controllers.memberProgramController.createMemberProgram(req.body, res);
});

// PUT /api/memberPrograms/update/:id
router.put("/update/:memberProgramId", (req, res) => {
  Controllers.memberProgramController.updateMemberProgram(req, res);
});

// DELETE /api/memberPrograms/delete/:id
router.delete("/delete/:memberProgramId", (req, res) => {
  Controllers.memberProgramController.deleteMemberProgram(req, res);
});

module.exports = router;