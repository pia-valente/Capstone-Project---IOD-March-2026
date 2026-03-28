const { DataTypes, Model, NOW } = require("sequelize"); // import data types and model

let dbConnect = require("../dbConnect"); // import connection

const sequelizeInstance = dbConnect.Sequelize;

class MemberProgram extends Model {}


MemberProgram.init(
  {
    memberProgramID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    memberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Member",
        key: "memberID",
      },
      onDelete: "CASCADE",
    },
    programID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Programs",
        key: "programID",
      },
      onDelete: "CASCADE",
    },
    paymentPlanID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PaymentPlan",
        key: "paymentPlanID",
      },
      onDelete: "CASCADE",
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    paymentMethod: {
      type: DataTypes.ENUM(
        "Credit Card",
        "Bank Transfer",
        "Cash",
        "Other"
      ),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "memberProgram",
    timestamps: false,
    freezeTableName: true,
    tableName: "MemberProgram",
  }
);

module.exports = MemberProgram;