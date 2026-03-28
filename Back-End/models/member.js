const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
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

    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "first_name",
    },

    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "last_name",
    },

    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "dob",
    },

    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: true,
    },

    program: {    // ADDED to match signup form
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    payment_plan: {
      type: DataTypes.ENUM("Weekly", "Monthly", "Yearly"),
      allowNull: true,
    },

    profile_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "profile_created",
    },

    /*coachID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Coach",
        key: "coachID",
      },
    },*/

    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "member",
    timestamps: false,
    freezeTableName: true,
    tableName: "Member",
  },
);

module.exports = Member;
