const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET /api/members
router.get("/", (req, res) => {
  Controllers.memberController.getMember(res);
});

// POST /api/members/create
router.post("/create", (req, res) => {
  Controllers.memberController.createMember(req.body, res);
});

// PUT  to /api/members/update/:id
router.put("/update/:memberId", (req, res) => {
  Controllers.memberController.updateMember(req, res);
});

// DELETE  to /api/members/delete/:id
router.delete("/delete/:memberId", (req, res) => {
  Controllers.memberController.deleteMember(req, res);
});

module.exports = router;