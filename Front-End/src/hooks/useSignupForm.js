import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  mobile: "",
  birthday: "",
  gender: "",
  program: "",
  paymentPlan: "",
};

// Extract API URL
const apiURL = "http://localhost:8081/api/members/create";

const useSignupForm = (onNewMember) => {
  // Store all form field values in a single state object
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  // handles INPUT CHANGES
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev, // keep existing fields
      [name]: value, // update only the changed field
    }));
  };

  // Reset form back to initialForm
  const resetForm = () => setFormData(initialForm);

  // Handle FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // Check if any field is empty
    const isFormIncomplete = Object.values(formData).some(
      (value) => value === " ",
    );

    if (isFormIncomplete) {
      alert("Please complete form");
      return; // stop submission
    }

    setLoading(true); // show loading state

    try {
      // Send POST request to backend API
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // throw ERROR if signup is not ok
      if (!response.ok) {
        throw new Error(data?.message || "Signup failed");
      }

      // signup SUCCESS
      alert("Signup successful!");

      // useSignupForm.jsx
      // Add a unique ID if backend doesn't return one
      if (onNewMember && data?.member) {
        const memberWithId = {
          id: data.member.id || Date.now(), // fallback id if backend doesn't provide one
          ...data.member,
        };
        onNewMember(memberWithId);
      }

      // CLEAR form after submitting
      resetForm();
    } catch (error) {
      // Handle network or server errors
      console.error("Signup error:", error);
      alert(error.message || "Something went wrong");
    } finally {
      // Always stop loading (success or failure)
      setLoading(false);
    }
  };

  // Expose values and handlers to the component using this hook
  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    resetForm,
  };
};

export default useSignupForm;
