import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const RadioButtonFormComponent = ({
  label,
  id,
  required,
  errorMessage,
  options,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(id, label, event.target.value); // Call the onChange callback with the field ID and value
    }
  };

  const [showError, setShowError] = useState(false);

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
      <FormControl component="fieldset">
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          value={selectedValue}
          onChange={handleChange}
          name="radio-buttons-group"
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "14px" }}>{option}</Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
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

export default RadioButtonFormComponent;
