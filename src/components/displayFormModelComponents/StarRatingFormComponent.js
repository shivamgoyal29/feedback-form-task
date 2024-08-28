import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Rating } from "@mui/material";

const StarRatingFormComponent = ({
  label,
  id,
  required,
  errorMessage,
  onChange,
}) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    if (newValue === null) {
      setRating(0); // Reset rating to 0 when deselected
    } else {
      setRating(newValue);
    }

    if (onChange) {
      onChange(id, label, newValue); // Call the onChange callback with the field ID and value
    }
  };

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (required && rating === 0) {
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
        <Rating
          name="star-rating"
          value={rating}
          onChange={handleRatingChange}
          size="large"
          sx={{ color: "#FFD700" }} // Optional: Gold color for stars
        />
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

export default StarRatingFormComponent;
