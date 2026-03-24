const { DataTypes, Model } = require("sequelize"); // import data types and model

let dbConnect = require("../dbConnect"); // import connection

const sequelizeInstance = dbConnect.Sequelize;

class Coach extends Model {}
// inherits everything from Model

Coach.init(
  {
    coachID: {
      type: DataTypes.INTEGER,
      allowNull: false, //Not null
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    profile_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "coach", // lowercase (you can also use "Coach")
    timestamps: true,
    freezeTableName: true, // prevents Sequelize from pluralizing
    tableName: "Coach", 
  },
);

module.exports = Coach;
