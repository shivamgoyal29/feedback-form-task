import React, { useEffect, useState } from "react";
import { Box, Paper, Button, Typography, Grid } from "@mui/material";

const CategoriesFormComponent = ({
  label,
  id,
  required,
  errorMessage,
  onChange,
  options,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((opt) => opt !== option)
        : [...prevSelectedOptions, option];

      // Pass the updated selected options to the onChange callback
      onChange(id, label, newSelectedOptions);

      return newSelectedOptions; // Return the updated options array
    });
  };

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (required && !selectedOptions.length) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [selectedOptions, required]);

  return (
    <Paper
      key={id}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        maxWidth: "473px",
        padding: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          color: "#232323",
          marginBottom: "8px",
        }}
      >
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Grid container spacing={2} mb={2}>
        {options.map((option, index) => (
          <Grid item xs={4} key={index}>
            <Button
              fullWidth
              variant={
                selectedOptions.includes(option) ? "contained" : "outlined"
              }
              onClick={() => handleButtonClick(option)}
              sx={{
                border: "1px solid #00000052",
                backgroundColor: selectedOptions.includes(option)
                  ? "#1976D2"
                  : "#FFFFFF",
                color: selectedOptions.includes(option) ? "#FFFFFF" : "#000000",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400" }}
              >
                {option}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Box
        display="flex"
        justifyContent="space-between" // Space out items to the left and right
        alignItems="center" // Align items vertically in the center
      >
        <Box flexGrow={1} textAlign="left">
          {showError && (
            <Typography
              sx={{
                fontSize: "14px",
                color: "red",
                fontWeight: "400",
              }}
            >
              *{errorMessage}
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default CategoriesFormComponent;
