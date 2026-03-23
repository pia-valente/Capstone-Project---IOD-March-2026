const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET  /api/coaches
router.get("/", (req, res) => {
  Controllers.coachController.getCoach(res);
});

// POST  /api/coaches/create
router.post("/create", (req, res) => {
  Controllers.coachController.createCoach(req.body, res);
});

// PUT /api/coaches/update/:id
router.put("/update/:coachId", (req, res) => {
  Controllers.coachController.updateCoach(req, res);
});

// DELETE /api/coaches/delete/:id
router.delete("/delete/:coachId", (req, res) => {
  Controllers.coachController.deleteCoach(req, res);
});

module.exports = router;