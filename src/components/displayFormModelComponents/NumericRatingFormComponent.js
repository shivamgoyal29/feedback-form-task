import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const NumericRatingFormComponent = ({
  label,
  id,
  required,
  errorMessage,
  onChange,
}) => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(id, label, newRating); // Call the onChange callback with the field ID and value
    }
  };

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (required && rating === null) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [rating, required]);

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
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      <Box mb={2}>
        <ToggleButtonGroup
          value={rating}
          exclusive
          onChange={handleRatingChange}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          {[...Array(10)].map((_, index) => (
            <ToggleButton
              key={index}
              value={index + 1}
              sx={{
                width: "40px",
                color: "#645757",
                border: "1px solid #DDD4D4",
              }}
            >
              {index + 1}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
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

export default NumericRatingFormComponent;
