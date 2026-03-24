const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// GET /api/paymentPlans
router.get("/", (req, res) => {
  Controllers.paymentPlanController.getPaymentPlan(res);
});

// POST /api/paymentPlans/create
router.post("/create", (req, res) => {
  Controllers.paymentPlanController.createPaymentPlan(req.body, res);
});

// PUT /api/paymentPlans/update/:id
router.put("/update/:paymentPlanId", (req, res) => {
  Controllers.paymentPlanController.updatePaymentPlan(req, res);
});

// DELETE /api/paymentPlans/delete/:id
router.delete("/delete/:paymentPlanId", (req, res) => {
  Controllers.paymentPlanController.deletePaymentPlan(req, res);
});

module.exports = router;