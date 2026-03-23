const express = require("express"); //import
const app = express();  //run
require("dotenv").config();
let dbConnect = require("./dbConnect");

// sequelize instance
const sequelizeInstance = dbConnect.Sequelize;

//import routes
let coachRoutes = require("./routes/coachRoutes");
let memberRoutes = require("./routes/memberRoutes");
let memberProgramRoutes = require("./routes/memberProgramRoutes");
let paymentPlanRoutes = require("./routes/paymentPlanRoutes");
let programRoutes = require("./routes/programRoutes");

// parse requests of content-type - application/json
app.use(express.json());

//mount routes
app.use("/api/coach", coachRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/memberPrograms", memberProgramRoutes);
app.use("/api/paymentPlans", paymentPlanRoutes);
app.use("/api/programs", programRoutes);

//default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The FitKit database application" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 


