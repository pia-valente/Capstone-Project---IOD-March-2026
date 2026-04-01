"use strict";
const Models = require("../models");

//let sessions = {};

// GET A MEMBER ----------------------------------------------------------------------------------------
const getMember = (req, res) => {
  Models.Member.findAll()
    .then((data) => {
      res.send({ result: 200, members: data }); // send only member data
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// CREATE A MEMBER --------------------------------------------------------------------------------------
const bcrypt = require("bcrypt");

const createMember = async (req, res) => { //changed data to req
  try {
    const data = req.body

     if (!data.password) {
      return res.status(400).send({ message: "Password required" });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newMember = await Models.Member.create({
      ...data,
      password: hashedPassword,
    });

     console.log("CREATED:", newMember.toJSON());

    res.send({ result: 200, data: newMember });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// AUTHENTICATE A MEMBER ---------------------------------------------------------------------------------
const loginMember = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Find member
    const member = await Models.Member.findOne({
      where: { email: email },
    });

    if (!member) {
      return res.status(401).send({ message: "Member not found" });
    }

    //Compare password
    const isMatch = await bcrypt.compare(password, member.password);

    if (!isMatch) {
      return res.status(401).send({ message: "Invalid password" });
    }

    req.session.memberId = member.memberID;

    //Success
    res.send({
      result: 200,
      message: "Login successful",
      member: {
        id: member.memberID,
        name: `${member.firstName} ${member.lastName}`,
        program: member.program,
        paymentPlan: member.payment_plan,
        is_active: member.is_active,
        birthday: member.birthday,
        gender: member.gender,
        country: member.country,
        email: member.email,
        mobile: member.mobile,
      },
    });

  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// GET SPECIFIC A MEMBER --------------------------------------------------------------------------------------
const getCurrentMember = async (req, res) => {

  try {
    const memberId = req.session.memberId;

    if (!memberId) {
      return res.status(401).send({ message: "Not logged in" });
    }

    const member = await Models.Member.findByPk(memberId); //Primarykey

    if (!member) {
      return res.status(404).send({ message: "Member not found" });
    }

    res.send({
      result: 200,
      member: {
        id: member.memberID,
        name: `${member.firstName} ${member.lastName}`,
        email: member.email,
        program: member.program,
        paymentPlan: member.payment_plan,
        is_active: member.is_active,
        birthday: member.birthday,
        gender: member.gender,
        country: member.country,
        mobile: member.mobile,
        profile_created: member.profile_created,
      },
    });

  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// UPDATE A MEMBER --------------------------------------------------------------------------------------
const updateMember = async (req, res) => {
  try {
    const [updated] = await Models.Member.update(req.body, {
      where: { memberID: req.params.memberId },
      returning: true,
    });

    if (!updated) {
      return res.status(404).send({ message: "Member not found" });
    }

    const updatedMember = await Models.Member.findByPk(req.params.memberId);

    res.send({
      result: 200,
      member: {
        id: updatedMember.memberID,
        name: `${updatedMember.firstName} ${updatedMember.lastName}`,
        email: updatedMember.email,
        program: updatedMember.program,
        paymentPlan: updatedMember.payment_plan,
        is_active: updatedMember.is_active,
        birthday: updatedMember.birthday,
        gender: updatedMember.gender,
        country: updatedMember.country,
        mobile: updatedMember.mobile,
      },
    });

  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// DELETE A MEMBER --------------------------------------------------------------------------------------
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
  loginMember,
  getCurrentMember
};





//create a member initial
/*
Models.Member.create(data)
  .then((data) => {
    res.send({ result: 200, data: data });
  })
  .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
*/



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
