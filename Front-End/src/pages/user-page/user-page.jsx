import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./user-page.css";
import ImageAvatar from "../../components/imageAvatar/imageAvatar";
import ActivityChart from "../../components/activityChart/activityChart";
import WhiteButton from "../../components/buttons/whiteButton/whiteButton"
import { useNavigate} from "react-router-dom"

function UserPage() {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Calculate accurate age
  function calculateAge(date) {
    if (!date) return 0;

    const birth = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const hasHadBirthday =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() >= birth.getDate());

    if (!hasHadBirthday) age--;

    return age;
  }

  useEffect(() => {
    fetch("http://localhost:8081/api/members/member", {
      
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch member");
        return res.json();
      })
      .then((data) => {
        const fetchedMember = data.member;

        if (!fetchedMember) {
          console.log("Not logged in");
          setLoading(false);
          return;
        }

        setMember(fetchedMember);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box id="user-page" className="user-page-container" display="flex" flexDirection="row">
      {/* LEFT SIDE */}
      <Box className="left-user-page-container" display="flex" flexDirection="column">
        <Box className="image-avatar-container" display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt="100px">
          <ImageAvatar></ImageAvatar>
          <h3>{member?.name}</h3>
          <h5>
            Member since:{" "}
            {member?.profile_created
              ? new Date(member.profile_created).toLocaleDateString()
              : "-"}
          </h5>
        </Box>

        <Box className="membership-details-container" display="flex" flexDirection="column" mt="70px" alignItems="flex-start">
          <h5>MEMBERSHIP DETAILS:</h5>
          <h5>Program: {member?.program || "-"}</h5>
          <h5>Payment Plan: {member?.paymentPlan || "-"}</h5>
          <h5>
            Status: {member?.is_active ? "Active" : "Inactive"}
          </h5>
        </Box>

        <Box
          className="personal-details-container"
          display="flex"
          flexDirection="column"
          mt="50px"
          alignItems="flex-start"
        >
          <h5>PERSONAL DETAILS:</h5>
          <h5>Age: {calculateAge(member?.birthday)}</h5>
          <h5>Gender: {member?.gender || "-"}</h5>
          <h5>Country: {member?.country || "-"}</h5>
          <h5>Email: {member?.email || "-"}</h5>
          <h5>Mobile: {member?.mobile || "-"}</h5>
          <WhiteButton sx={{ fontSize: "14px", padding: "6px 12px", minWidth: "80px", mt: "20px" }} onClick={() => navigate("/")}>Logout</WhiteButton>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        className="right-user-page-container"
        display="flex"
        flexDirection="column"
      >
        <Box className="welcome-container" mt="70px">
          <h2>Welcome back, {member?.name}</h2>
        </Box>

        <Box className="chart-container" mt="20px" height="300px">
          <h5>Workouts Completed</h5>
          <ActivityChart />
        </Box>
      </Box>
    </Box>
  );
}

export default UserPage;