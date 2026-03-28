import React from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import GreenButton from "../buttons/greenButton/greenButton";
import useSignupForm from "../../hooks/useSignupForm";
import "./signupForm.css";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const programOptions = [
  { value: "rope flow", label: "Rope Flow" },
  { value: "kettlebell", label: "Kettle Bell" },
  { value: "steel mace", label: "Steel Mace" },
  { value: "club bell", label: "Clubbell" },
];

const paymentPlanOptions = [
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Yearly", label: "Yearly" },
];

function SignupForm({ onNewMember }) {
  const { formData, handleChange, handleSubmit, loading } = useSignupForm(onNewMember);

  return (
    <Box className="signup-container" display="flex" flexDirection="column" alignItems="center">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} fullWidth />
        <TextField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} fullWidth />
        <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
        <TextField name="password" label="Password" type="password" value={formData.password} onChange={handleChange} fullWidth />

        {/* Country and Mobile side by side */}
        <div className="country-mobile" style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <TextField name="country" label="Country" value={formData.country} onChange={handleChange} fullWidth />
          <TextField name="mobile" label="Mobile Number" value={formData.mobile} onChange={handleChange} fullWidth />
        </div>

        {/* Birthday and Gender side by side */}
        <div className="birthday-gender" style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <TextField name="birthday" label="Birthday" type="date" InputLabelProps={{ shrink: true }} value={formData.birthday} onChange={handleChange} fullWidth />
          <TextField name="gender" label="Gender" select value={formData.gender} onChange={handleChange} fullWidth>
            {genderOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
        </div>

        <TextField name="program" label="Program" select value={formData.program} onChange={handleChange} fullWidth>
          {programOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </TextField>

        <TextField name="paymentPlan" label="Payment Plan" select value={formData.paymentPlan} onChange={handleChange} fullWidth>
          {paymentPlanOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </TextField>

        <GreenButton type="submit" disabled={loading}>{loading ? "Submitting..." : "Sign Up"}</GreenButton>
      </form>
    </Box>
  );
}

export default SignupForm;