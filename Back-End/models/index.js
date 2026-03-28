'use strict'
//const Coach = require('./coach'); // require the model
const Member = require('./member');
const Program = require('./program');
const PaymentPlan = require('./paymentPlan');
const MemberProgram = require('./memberProgram');


init();

// Coach <-> Member
/*Coach.hasMany(Member, { foreignKey: 'coachID', as: 'members' });
Member.belongsTo(Coach, { foreignKey: 'coachID', as: 'coach' });*/

// Member <-> MemberProgram
Member.hasMany(MemberProgram, { foreignKey: 'memberID', as: 'memberPrograms' });
MemberProgram.belongsTo(Member, { foreignKey: 'memberID', as: 'member' });

// Program <-> MemberProgram
Program.hasMany(MemberProgram, { foreignKey: 'programID', as: 'memberPrograms' });
MemberProgram.belongsTo(Program, { foreignKey: 'programID', as: 'program' });

// PaymentPlan <-> MemberProgram
PaymentPlan.hasMany(MemberProgram, { foreignKey: 'paymentPlanID', as: 'memberPrograms' });
MemberProgram.belongsTo(PaymentPlan, { foreignKey: 'paymentPlanID', as: 'paymentPlan' });

// Member -> Program through MemberProgram
Member.belongsToMany(Program, {
  through: MemberProgram,
  foreignKey: 'memberID',
  otherKey: 'programID',
  as: 'programs',
});

Program.belongsToMany(Member, {
  through: MemberProgram,
  foreignKey: 'programID',
  otherKey: 'memberID',
  as: 'members',
});

//run after defining associations
async function init() {
    //await Coach.sync(); 
    await Member.sync();
    await Program.sync();
    await PaymentPlan.sync();
    await MemberProgram.sync();
}

module.exports = {
    //Coach,
    Member,
    Program,
    PaymentPlan,
    MemberProgram,
};