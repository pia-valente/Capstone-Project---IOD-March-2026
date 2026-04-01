const express = require("express"); //import
const cors = require("cors"); //enable CORS
const app = express();  //run
require("dotenv").config();

const dbConnect = require("./dbConnect"); // sequelize instance
const sequelizeInstance = dbConnect.Sequelize;
const session = require("express-session")

//import routes
const coachRoutes = require("./routes/coachRoutes");
const memberRoutes = require("./routes/memberRoutes");
const memberProgramRoutes = require("./routes/memberProgramRoutes");
const paymentPlanRoutes = require("./routes/paymentPlanRoutes");
const programRoutes = require("./routes/programRoutes");

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}));
//enable CORS so frontend can make a request
//app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

//sessions
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));

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
const PORT = process.env.PORT || 8081; //backend
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 


