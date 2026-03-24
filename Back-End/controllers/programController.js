"use strict";
const Models = require("../models"); 

// Get all programs
const getProgram = (res) => {
  Models.Program.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new program
const createProgram = (data, res) => {
  Models.Program.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing program
const updateProgram = (req, res) => {
  Models.Program.update(req.body, {
    where: { programId: req.params.programId },
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

// Delete a program
const deleteProgram = (req, res) => {
  Models.Program.destroy({ where: { programId: req.params.programId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getProgram,
  createProgram,
  updateProgram,
  deleteProgram,
};