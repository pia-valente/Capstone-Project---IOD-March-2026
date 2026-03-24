const { DataTypes, Model } = require("sequelize"); // import data types and model

let dbConnect = require("../dbConnect"); // import connection

const sequelizeInstance = dbConnect.Sequelize;

class PaymentPlan extends Model {}


PaymentPlan.init(
  {
    paymentPlanID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    billingCycle: {
      type: DataTypes.ENUM("Weekly", "Monthly", "Yearly"),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "paymentPlan", 
    timestamps: false,
    freezeTableName: true, 
    tableName: "PaymentPlan", 
  }
);

module.exports = PaymentPlan;