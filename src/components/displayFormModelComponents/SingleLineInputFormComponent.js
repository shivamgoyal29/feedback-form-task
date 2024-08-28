import { Box, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SingleLineInputFormComponent = ({
  label,
  id,
  required,
  errorMessage,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(id, label, event.target.value); // Call the onChange callback with the field ID and value
    }
  };

  useEffect(() => {
    if (required && !selectedValue) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [selectedValue, required]);

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
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type something..."
          value={selectedValue}
          onChange={handleChange}
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

export default SingleLineInputFormComponent;
