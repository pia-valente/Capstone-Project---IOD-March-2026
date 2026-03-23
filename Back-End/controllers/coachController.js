"use strict";
const Models = require("../models"); 

// Get all coaches
const getCoach = (res) => {
  Models.Coach.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new coach
const createCoach = (data, res) => {
  Models.Coach.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing coach
const updateCoach = (req, res) => {
  Models.Coach.update(req.body, {
    where: { coachId: req.params.coachId },
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

// Delete a coach
const deleteCoach = (req, res) => {
  Models.Coach.destroy({ where: { coachId: req.params.coachId } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCoach,
  createCoach,
  updateCoach,
  deleteCoach,
};