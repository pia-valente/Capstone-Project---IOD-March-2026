const { DataTypes, Model } = require("sequelize"); // import data types and model

let dbConnect = require("../dbConnect"); // import connection

const sequelizeInstance = dbConnect.Sequelize;

class Member extends Model {}


Member.init(
  {
    memberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    profile_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    coach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Coach",
        key: "coachID",
      },
      onDelete: "SET NULL",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "member", 
    timestamps: false, // using profile_created instead
    freezeTableName: true, 
    tableName: "Member", 
  }
);

module.exports = Member;