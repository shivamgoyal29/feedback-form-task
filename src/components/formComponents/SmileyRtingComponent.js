import React, { useState } from "react";
import { Box, Paper, Typography, Rating, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Custom styled Rating component with smiley faces
const SmileyRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#000000", // Set the filled smiley color
    opacity: 0.18, // Set opacity to 18%
  },
  "& .MuiRating-iconHover": {
    color: "#000000", // Ensure hover smileys are black
    opacity: 0.18,
  },
});

const SmileyRatingComponent = ({ label, required }) => {
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
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      <Box mb={2}>
        <SmileyRating
          name="smiley-rating"
          value={rating}
          onChange={handleRatingChange}
          size="large"
          precision={1}
          icon={<SentimentVeryDissatisfiedIcon />}
          emptyIcon={<SentimentVeryDissatisfiedIcon />}
          getLabelText={(value) => {
            switch (value) {
              case 1:
                return "Very Dissatisfied";
              case 2:
                return "Dissatisfied";
              case 3:
                return "Neutral";
              case 4:
                return "Satisfied";
              case 5:
                return "Very Satisfied";
              default:
                return "";
            }
          }}
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

export default SmileyRatingComponent;
