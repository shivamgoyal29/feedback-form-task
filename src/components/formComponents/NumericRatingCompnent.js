import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const NumericRatingComponent = ({
  type,
  label,
  id,
  options,
  required,
  onDelete,
  onEdit,
  errorMessage,
}) => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
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

export default NumericRatingComponent;
