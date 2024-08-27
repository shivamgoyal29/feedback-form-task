import React, { useEffect, useState } from "react";
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

const CategoriesComponent = ({
  type,
  label,
  id,
  options,
  required,
  errorMessage,
  onDelete,
  onEdit,
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

export default CategoriesComponent;
