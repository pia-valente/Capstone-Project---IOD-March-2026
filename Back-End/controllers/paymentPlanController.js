"use strict";
const Models = require("../models"); 

// Get all payment plans
const getPaymentPlan = (res) => {
  Models.PaymentPlan.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new payment plan
const createPaymentPlan = (data, res) => {
  Models.PaymentPlan.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing payment plan
const updatePaymentPlan = (req, res) => {
  Models.PaymentPlan.update(req.body, {
    where: { paymentPlanId: req.params.paymentPlanId },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a payment plan
const deletePaymentPlan = (req, res) => {
  Models.PaymentPlan.destroy({ where: { paymentPlanId: req.params.paymentPlanId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPaymentPlan,
  createPaymentPlan,
  updatePaymentPlan,
  deletePaymentPlan,
};