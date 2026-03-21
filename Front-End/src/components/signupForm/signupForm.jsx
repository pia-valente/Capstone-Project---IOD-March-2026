import React, { useState } from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import GreenButton from "../../components/buttons/greenButton/greenButton";
import "./signupForm.css";

//DROP DOWN MENUS
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const paymentPlanOptions = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const programOptions = [
  { value: "rope flow", label: "Rope Flow" },
  { value: "kettlebell", label: "Kettle Bell" },
  { value: "steel mace", label: "Steel Mace" },
  { value: "club bell", label: "Clubbell" },
];

function SignupForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
    country: "",
    mobile: "",
    program: "",
    paymentPlan: "",
  });

  //HANDLE CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    else console.log("Signup data:", formData);
  };

  return (
    <Box className="signup-container" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <TextField name="name" label="Full Name" variant="filled" fullWidth value={formData.name} onChange={handleChange}/>
          <TextField name="email" label="Email" variant="filled" fullWidth value={formData.email} onChange={handleChange}/>
          <TextField name="password" label="Password" type="password" variant="filled" fullWidth value={formData.password} onChange={handleChange}/>
          <TextField name="mobile" label="Mobile" variant="filled" fullWidth value={formData.mobile} onChange={handleChange}/>

          <Box className="birthday-gender" display="flex" flexDirection="row">
            <TextField name="birthday" label="Birthday" type="date" variant="filled" fullWidth InputLabelProps={{ shrink: true }} value={formData.birthday} onChange={handleChange}/>
            <TextField name="gender" label="Gender" select variant="filled" fullWidth value={formData.gender} onChange={handleChange}>
              {genderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <TextField name="country" label="Country" variant="filled" fullWidth value={formData.country} onChange={handleChange}/>

          <TextField name="program" label="Program Options" select variant="filled" fullWidth value={formData.program} onChange={handleChange}>
            {programOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField name="paymentPlan" label="Payment Plan" select variant="filled" fullWidth value={formData.paymentPlan} onChange={handleChange}>
            {paymentPlanOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        
          <GreenButton fontSize="20px" padding="6px 12px" minWidth="700px" marginTop="16px">Sign Up</GreenButton>
        </form>
    </Box>
  );
}

export default SignupForm;
