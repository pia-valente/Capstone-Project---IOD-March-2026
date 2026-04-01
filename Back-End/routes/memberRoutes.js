const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET /api/members
router.get("/", (req, res) => {
  Controllers.memberController.getMember(req, res);
});

//GET current member
router.get("/member", (req, res) => {
  Controllers.memberController.getCurrentMember(req, res);
});

// CREATE/POST /api/members/create
router.post("/create", (req, res) => {
  Controllers.memberController.createMember(req, res);
});

//LOGIN
router.post("/login", (req, res) => {
  Controllers.memberController.loginMember(req, res);
});

// UPDATE/PUT  to /api/members/update/:id
router.put("/update/:memberId", (req, res) => {
  Controllers.memberController.updateMember(req, res);
});

// DELETE/DELETE  to /api/members/delete/:id
router.delete("/delete/:memberId", (req, res) => {
  Controllers.memberController.deleteMember(req, res);
});

module.exports = router;