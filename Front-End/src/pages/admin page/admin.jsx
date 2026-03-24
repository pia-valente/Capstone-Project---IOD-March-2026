import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./admin.css"

const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "First name", type: "string", width: 150, editable: true },
    { field: "lastName", headerName: "Last name", type: "string", width: 150, editable: true },
    { field: "email", headerName: "Email", type: "string", width: 200, editable: true},
    { field: "mobile", headerName: "Mobile", type: "string", width: 150, editable: true},
    { field: "age", headerName: "Age", type: "number", width: 90, editable: false},
    { field: "gender", headerName: "Gender", type: "string", valueOptions: ["Male", "Female", "Other"], width: 110, editable: true},
    { field: "country", headerName: "Country", type: "string", width: 150, editable: true},
    { field: "program", headerName: "Program", type: "string", width: 150, editable: true},
    { field: "payment", headerName: "Payment Plan", type: "string", valueOptions: ["Weekly", "Monthly", "Yearly"], width: 150, editable: true},
];



function Admin() {
  return (
    <Box className="admin-page-container" display="flex" flexDirection="column" alignItems="center">
      <Box className="data-container" display="flex" flexDirection="column" alignContent="flex-start">
        <h2>Members</h2>
        <DataGrid
          rows={[]}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default Admin;
