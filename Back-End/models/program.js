const { DataTypes, Model } = require("sequelize"); // import data types and model

let dbConnect = require("../dbConnect"); // import connection

const sequelizeInstance = dbConnect.Sequelize;

class Program extends Model {}
// inherits everything from Model

Program.init(
  {
    programID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM(
        "Rope Flow",
        "Kettlebell",
        "Steel Mace",
        "Clubbell"
      ),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "program", 
    timestamps: false,
    freezeTableName: true,
    tableName: "Programs", 
  }
);

module.exports = Program;