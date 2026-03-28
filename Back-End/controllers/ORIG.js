//
"use strict";
const Models = require("../models"); 

let sessions = {};



const getMember = (res) => {
  Models.Member.findAll()
    .then((data) => {
      res.send({ result: 200, members: data }); // send only member data
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

// Delete a member initial
/*
const deleteMember = (req, res) => {

  Models.Member.destroy({ where: { memberID: req.params.memberId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
*/

// Delete a member
const deleteMember = (req, res) => {
  const { memberId } = req.params;

  Models.Member.destroy({ where: { memberID: memberId } })
    .then((deletedCount) => {
      // Check if any row was deleted
      if (deletedCount === 0) {
        return res.status(404).send({
          result: 404,
          message: "Member not found",
        });
      }
      res.send({
        result: 200,
        message: "Member deleted successfully",
      });
    })
    .catch((err) => {
      console.error("Error deleting member:", err);
      res.status(500).send({
        result: 500,
        error: err.message || "Something went wrong",
      });
    });
};

module.exports = {
  getMember,
  createMember,
  updateMember,
  deleteMember,
};