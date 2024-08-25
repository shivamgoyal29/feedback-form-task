import React, { useState } from "react";
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

const NumericRatingComponent = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

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
        Rate Your Experience
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

export default NumericRatingComponent;
