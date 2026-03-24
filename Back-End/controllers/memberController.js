"use strict";
const Models = require("../models"); 

// Get all members
const getMember = (res) => {
  Models.Member.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new member
const createMember = (data, res) => {
  Models.Member.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing member
const updateMember = (req, res) => {
  Models.Member.update(req.body, {
    where: { memberID: req.params.memberId },
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

// Delete a member
const deleteMember = (req, res) => {
  Models.Member.destroy({ where: { memberId: req.params.memberId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getMember,
  createMember,
  updateMember,
  deleteMember,
};