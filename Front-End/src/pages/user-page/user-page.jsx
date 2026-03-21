import React from "react";
import { useState, useEffect, useContext } from "react";

import { Box } from "@mui/material";
import "./user-page.css";
import ImageAvatar from "../../components/imageAvatar/imageAvatar";
import ActivityChart from "../../components/activityChart/activityChart";

function UserPage() {
  const [userName, setUserName] = useState("");
  const [userStartDate, setStartDate] = useState("");

  // useEffect fetch data from backend here
  useEffect(() => {
    setUserName("Kit");
    setStartDate("March 2026");
  }, []);

  /*
  // Example: fetch data from backend
    fetch("https://example.com/api/user")  // replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.name);           // assume API returns { name: "Pia", startDate: "2022-01-01" }
        setStartDate(data.startDate);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []); // empty array = run once when component loads
*/

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
          <h3>Pia Valente</h3>
          <h5>Member since: 2025</h5>
        </Box>

        <Box
          className="membership-details-container"
          display="flex"
          flexDirection="column"
          mt="70px"
          alignItems="flex-start"
        >
          <h5>MEMBERSHIP DETAILS:</h5>
          <h5>Program:</h5>
          <h5>Payment Plan:</h5>
          <h5>Status:</h5>
        </Box>

        <Box
          className="personal-details-container"
          display="flex"
          flexDirection="column"
          mt="70px"
          alignItems="flex-start"
        >
          <h5>PERSONAL DETAILS:</h5>
          <h5>Age</h5>
          <h5>Gender:</h5>
          <h5>Country:</h5>
          <h5>Email</h5>
          <h5>Mobile:</h5>
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
