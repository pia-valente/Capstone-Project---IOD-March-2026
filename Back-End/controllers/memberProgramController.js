"use strict";
const Models = require("../models"); 

// Get all member programs
const getMemberProgram = (res) => {
  Models.MemberProgram.findAll({include: [Models.Member, Models.Programs, Models.PaymentPlan]})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new member program
const createMemberProgram = (data, res) => {
  Models.MemberProgram.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing member program
const updateMemberProgram = (req, res) => {
  Models.MemberProgram.update(req.body, {
    where: { memberProgramId: req.params.memberProgramId },
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

// Delete a member program
const deleteMemberProgram = (req, res) => {
  Models.MemberProgram.destroy({ where: { memberProgramId: req.params.memberProgramId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getMemberProgram,
  createMemberProgram,
  updateMemberProgram,
  deleteMemberProgram,
};