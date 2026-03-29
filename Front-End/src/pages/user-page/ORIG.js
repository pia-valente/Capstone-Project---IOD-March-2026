//
import React from "react";
import { useState, useEffect, useContext } from "react";

import { Box } from "@mui/material";
import "./user-page.css";
import ImageAvatar from "../../components/imageAvatar/imageAvatar";
import ActivityChart from "../../components/activityChart/activityChart";

function UserPage() {
  const [userName, setUserName] = useState("");
  const [userStartDate, setStartDate] = useState("");
  const [userProgram, setUserProgram] = useState("");
  const [userPaymentPlan, setUserPaymentPlan] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [userGender, setUserGender] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [loading, setLoading] = useState(true);
  
//useEFFECT
  useEffect(() => {
    // Fetch data from backend
    fetch("https://example.com/api/user")  // replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        setUserName(`${data.firstName} ${data.lastName}`);
        setStartDate(data.profile_created.split("T")[0]);  // Assuming the date is in ISO format
        setUserProgram(data.program);
        setUserPaymentPlan(data.payment_plan);

        setUserAge(calculateAge(data.birthday));
        setUserGender(data.gender);
        setUserCountry(data.country);
        setUserEmail(data.email);
        setUserMobile(data.mobile);
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []);



  return (
    <Box
      id="user-page"
      className="user-page-container"
      display="flex"
      flexDirection="row"
    >
      {/*LEFT SIDE*/}
      <Box
        className="left-user-page-container"
        display="flex"
        flexDirection="column"
      >
        <Box
          className="image-avatar-container"
          display="flex"
          flexDirection="column"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          mt="70px"
        >
          <ImageAvatar></ImageAvatar>
          <h3>{userName || "Loading.."}</h3>
          <h5>{`Member since: ${userStartDate || "Loading.."}`}</h5>
        </Box>

        <Box
          className="membership-details-container"
          display="flex"
          flexDirection="column"
          mt="70px"
          alignItems="flex-start"
        >
          <h5>MEMBERSHIP DETAILS:</h5>
          <h5>Program: {userProgram || "Loading..."}</h5>
          <h5>Payment Plan: {userPaymentPlan || "Loading..."}</h5>
          <h5>Status: {loading ? "Loading..." : "Active"}</h5>
        </Box>

        <Box
          className="personal-details-container"
          display="flex"
          flexDirection="column"
          mt="70px"
          alignItems="flex-start"
        >
          <h5>PERSONAL DETAILS:</h5>
          <h5>Age: {userAge || "Loading..."}</h5>
          <h5>Gender: {userGender || "Loading..."}</h5>
          <h5>Country: {userCountry || "Loading..."}</h5>
          <h5>Email: {userEmail || "Loading..."}</h5>
          <h5>Mobile: {userMobile || "Loading..."}</h5>
        </Box>
      </Box>

      {/*RIGHT SIDE*/}
      <Box className="right-user-page-container" display="flex" flexDirection="column">

        <Box className="welcome-container" mt="70px">
          <h2>Welcome back, Pia</h2>
        </Box>

        <Box className="chart-container" mt="20px">
          <h5>Workouts Completed</h5>
          <ActivityChart></ActivityChart>

        </Box>


      </Box>



    </Box>
  );
}

export default UserPage;