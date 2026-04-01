import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import "./admin.css";

// --- Error Boundary Component ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    this.setState({ error: error.message }); // Optionally set error message to display
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={3} textAlign="center">
          <h2>Something went wrong while rendering the table.</h2>
          <p>{this.state.error?.message}</p>
        </Box>
      );
    }
    return this.props.children;
  }
}

//-----------------------------------------------------------------------------------------

function Admin() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]); // Protected route check

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/adminpage");
    }
  }, []); // Fetch members from the API

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/members");
        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Fetched data:", data);

        const membersArray = data.members || [];
        console.log("Members array:", membersArray);

        const formattedData = membersArray.map((member, index) => ({
          id: member?.memberID || index + 1,
          firstName: member?.firstName || "",
          lastName: member?.lastName || "",
          email: member?.email || "",
          password: member?.password || "",
          country: member?.country || "",
          mobile: member?.mobile || "",
          birthday: member?.birthday || "",
          gender: member?.gender || "",
          program: member?.program || "",
          paymentPlan: member?.payment_plan || "",
        }));

        setRows(formattedData);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  //-----------------------------------------------------------------------------------------
  // DELETE MEMBER
  const handleDeleteMember = async (id) => {
    console.log("Deleting member with ID:", id); // Check if this logs the correct ID
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:8081/api/members/delete/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete member");
      }

      setRows((prevRows) => prevRows.filter((row) => row.id !== id));

      alert("Member deleted successfully.");
    } catch (error) {
      console.error("Error deleting member:", error);
      alert(error.message || "Something went wrong");
    }
  };

  //-----------------------------------------------------------------------------------------
  // HANDLE UPDATE MEMBER
  const handleCellEditCommit = async (params) => {
    const updatedRow = params.row;
    const updatedField = params.field;
    const updatedValue = params.value;

    try {
      const response = await fetch(`http://localhost:8081/api/members/update/${updatedRow.memberId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [updatedField]: updatedValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update member");
      }

      // Update the row data locally after successful update
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === updatedRow.id ? { ...row, [updatedField]: updatedValue } : row
        )
      );

      alert("Member updated successfully.");
    } catch (error) {
      console.error("Error updating member:", error);
      alert(error.message || "Something went wrong");
    }
  };
  

  //-----------------------------------------------------------------------------------------
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "First Name", type: "string", width: 150, editable: true},
    { field: "lastName", headerName: "Last Name", type: "string", width: 150, editable: true },
    { field: "email", headerName: "Email", type: "string", width: 150, editable: true },
    { field: "password", headerName: "Password", type: "string", width: 150, editable: true },
    { field: "country", headerName: "Country", type: "string", width: 150, editable: true },
    { field: "mobile", headerName: "Mobile", type: "string", width: 150, editable: true },
    { field: "birthday", headerName: "Age", type: "number", width: 80, editable: false,
      valueGetter: (params) => {
        const birthday = params.row?.birthday;
        if (!birthday) return "No birthdate available"; // If birthday is missing
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age;
      },
    },
    { field: "gender", headerName: "Gender", type: "string", valueOptions: ["Male", "Female", "Other"], width: 110, editable: true },
    { field: "program", headerName: "Program", type: "string", width: 100, editable: true },
    { field: "paymentPlan", headerName: "Payment Plan", type: "string",
      valueOptions: ["Weekly", "Monthly", "Yearly"],
      width: 150,
      editable: true,
      valueGetter: (params) => {
        const paymentPlan = params.row?.payment_plan; // Get this from backend
        return paymentPlan ? paymentPlan : "Not specified"; // Show the value if available
      },
    },
    // DELETE BUTTON:
    { field: "action", headerName: "Actions", width: 150, renderCell: (params) => (<button onClick={() => handleDeleteMember(params.row.id)}>Delete</button>) }
  ];

//-----------------------------------------------------------------------------------------

  return (
    <Box className="admin-page-container" display="flex" flexDirection="column" alignItems="center">
      <Box className="data-container" display="flex" flexDirection="column" alignContent="flex-start">
        <h2>Members</h2>
        <Box height={500}>
          <ErrorBoundary>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{toolbar:GridToolbar}}
              showToolbar
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
            ></DataGrid>
          </ErrorBoundary>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;
