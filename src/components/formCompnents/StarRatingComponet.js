import React, { useState } from "react";
import { Box, Paper, Typography, Rating, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StarRatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
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

export default StarRatingComponent;
