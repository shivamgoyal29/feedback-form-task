import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const GridButtonComponent = ({
  label,
  options,
  required,
  onUpdate,
  onDelete,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (option) => {
    // Toggle selection
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((opt) => opt !== option)
        : [...prevSelectedOptions, option]
    );
  };

  // const [isEditing, setIsEditing] = useState(false);

  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  // const handleSave = (updatedField) => {
  //   onUpdate(updatedField);
  //   setIsEditing(false);
  // };

  // // const handleDeleteClick = () => {
  // //   onDelete(field.id); // Assuming field has a unique 'id'
  // // };

  return (
    <Paper
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
        justifyContent="flex-end" // Align buttons to the right
      >
        <IconButton
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
    </Paper>
  );
};

export default GridButtonComponent;
