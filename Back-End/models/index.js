'use strict'
const Coach = require('./coach') //require the model
const Member = require('./member');
const Program = require('./program');
const PaymentPlan = require('./paymentPlan');
const MemberProgram = require('./memberProgram');

async function init() {
    await Coach.sync(); //sync the model
    await Member.sync();
    await Program.sync();
    await PaymentPlan.sync();
    await MemberProgram.sync();
};

init();

module.exports = {
    Coach, //export the model
    Member,
    Program,
    PaymentPlan,
    MemberProgram,
};

