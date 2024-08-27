import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Rating, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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

const SmileyRatingComponent = ({
  type,
  label,
  id,
  options,
  required,
  onDelete,
  onEdit,
  errorMessage,
}) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    if (newValue === null) {
      setRating(0); // Reset rating to 0 when deselected
    } else {
      setRating(newValue);
    }
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

export default SmileyRatingComponent;
