import React from "react";
import Box from "@mui/material/Box";

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
  };
}

export default ErrorBoundary;