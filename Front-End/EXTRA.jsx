<Box className="signupbox-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Full Name" variant="filled" fullWidth value={formData.name} onChange={handleChange} />
        <TextField name="email" label="Email" variant="filled" fullWidth value={formData.email} onChange={handleChange} />
        <TextField name="password" label="Password" type="password" variant="filled" fullWidth value={formData.password} onChange={handleChange} />
        <TextField name="birthday" label="Birthday" type="date" variant="filled" fullWidth InputLabelProps={{ shrink: true }} value={formData.birthday} onChange={handleChange} />
        <TextField name="gender" label="Gender" select variant="filled" fullWidth value={formData.gender} onChange={handleChange}>
          {genderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </TextField>
        <TextField name="country" label="Country" variant="filled" fullWidth value={formData.country} onChange={handleChange} />
        <TextField name="mobile" label="Mobile" variant="filled" fullWidth value={formData.mobile} onChange={handleChange} />
        <TextField name="program" label="Program" variant="filled" fullWidth value={formData.program} onChange={handleChange} />
        <TextField name="paymentPlan" label="Payment Plan" select variant="filled" fullWidth value={formData.paymentPlan} onChange={handleChange}>
          {paymentPlanOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </TextField>
        <GreenButton fontSize="20px" padding="6px 12px" minWidth="120px">Sign Up</GreenButton>
      </form>
    </Box>