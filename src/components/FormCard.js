import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  Box,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import TextComponent from "./formCompnents/TextCompnent";
import NumericRatingComponent from "./formCompnents/NumericRatingCompnent";
import StarRatingComponent from "./formCompnents/StarRatingComponet";
import SmileyRatingComponent from "./formCompnents/SmileyRtingComponent";
import SingleLineInputComponent from "./formCompnents/SingleLineInputComponent";
import RadioButtonComponent from "./formCompnents/RadioButtonCompnent";
import CategoriesComponent from "./formCompnents/CategoriesComponent";

const FormCard = () => {
  // Define click handlers for the buttons
  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  const handleDeleteClick = () => {
    console.log("Delete button clicked");
  };

  return (
    <Card
      sx={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        pb: "16px",
      }}
    >
      <CardHeader
        sx={{ bgcolor: "#5578F4", color: "white" }}
        title={
          <Box display="flex" alignItems="center" width="100%">
            <IconButton
              aria-label="back"
              color="inherit"
              onClick={handleEditClick}
            >
              <ArrowBackIosSharpIcon />
            </IconButton>

            <Box display="flex" alignItems="center" flexGrow={1}>
              <Typography
                variant="h6"
                sx={{ marginRight: "8px", fontSize: "24px" }}
              >
                Hello
              </Typography>

              <IconButton
                aria-label="edit"
                color="inherit"
                onClick={handleDeleteClick}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px", // Space between components
          paddingBottom: "16px", // Extra padding at the bottom
        }}
      >
        <TextComponent />
        <NumericRatingComponent />
        <StarRatingComponent />
        <SmileyRatingComponent />
        <SingleLineInputComponent />
        <RadioButtonComponent />
        <CategoriesComponent />
      </CardContent>
    </Card>
  );
};

export default FormCard;
