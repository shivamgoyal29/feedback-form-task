import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const RadioButtonComponent = ({
  type,
  label,
  id,
  options,
  required,
  onDelete,
  onEdit,
  errorMessage,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleEditClick = () => {
    onEdit({
      activebox: type,
      intialData: { label, options, required, errorMessage },
      id: id,
    });
  };

  const handleDelteClick = () => {
    onDelete({ id: id });
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
        boxShadow: "0px 2px 4px 0px #00000040",
        backgroundColor: "#FFFFFF",
        maxWidth: "473px",
        border: "1px solid #DBD6D6",
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
        <Box>
          <IconButton
            onClick={handleEditClick}
            aria-label="edit"
            sx={{
              opacity: 0.5,
              color: "black",
              fontSize: "24px",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={handleDelteClick}
            aria-label="delete"
            sx={{
              opacity: 0.5,
              color: "black",
              fontSize: "24px",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default RadioButtonComponent;
