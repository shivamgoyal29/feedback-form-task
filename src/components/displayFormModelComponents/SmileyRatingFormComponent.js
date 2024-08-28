import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Rating } from "@mui/material";
import { styled } from "@mui/system";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const SmileyRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "#FFD700", // Set the filled smiley color
    opacity: 1, // Fully opaque for selected
    transform: "scale(1.2)", // Slightly scale up the icon when selected
    transition: "transform 0.2s ease", // Smooth transition for scaling
  },
  "& .MuiRating-iconEmpty": {
    color: "#000000", // Color of unselected smileys
    opacity: 0.18, // Semi-transparent
  },
  "& .MuiRating-iconHover": {
    color: "#FFD700", // Hover color
    opacity: 0.6, // Semi-transparent on hover
  },
}));

const SmileyRatingFormComponent = ({
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
      const smiley = (newValue) => {
        switch (newValue) {
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
      };
      const smileyValue = smiley(newValue);
      onChange(id, label, smileyValue); // Call the onChange callback with the field ID and value
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

  const iconMapping = {
    1: <SentimentVeryDissatisfiedIcon />,
    2: <SentimentDissatisfiedIcon />,
    3: <SentimentNeutralIcon />,
    4: <SentimentSatisfiedIcon />,
    5: <SentimentVerySatisfiedIcon />,
  };

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
        <SmileyRating
          name="smiley-rating"
          value={rating}
          onChange={handleRatingChange}
          size="large"
          precision={1}
          icon={iconMapping[rating] || <SentimentNeutralIcon />}
          emptyIcon={<SentimentNeutralIcon />}
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

export default SmileyRatingFormComponent;
