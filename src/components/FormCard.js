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
import TextComponent from "./formComponents/TextCompnent";
import NumericRatingComponent from "./formComponents/NumericRatingCompnent";
import StarRatingComponent from "./formComponents/StarRatingComponet";
import SmileyRatingComponent from "./formComponents/SmileyRtingComponent";
import SingleLineInputComponent from "./formComponents/SingleLineInputComponent";
import RadioButtonComponent from "./formComponents/RadioButtonCompnent";
import CategoriesComponent from "./formComponents/CategoriesComponent";

const FormCard = ({ savedFields }) => {
  // Define click handlers for the buttons
  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  const handleDeleteClick = () => {
    console.log("Delete button clicked");
  };

  const renderComponent = (type, label) => {
    switch (type) {
      case "Textarea":
        return <TextComponent label={label.label} required={label.required} />;
      case "Smiley Rating":
        return (
          <SmileyRatingComponent
            label={label.label}
            required={label.required}
          />
        );
      case "Rating":
        return (
          <StarRatingComponent label={label.label} required={label.required} />
        );
      case "Category":
        return (
          <CategoriesComponent
            label={label.label}
            options={label.options}
            required={label.required}
          />
        );
      case "Numerical Rating":
        return (
          <NumericRatingComponent
            label={label.label}
            required={label.required}
          />
        );
      case "Radio Button":
        return (
          <RadioButtonComponent
            label={label.label}
            options={label.options}
            required={label.required}
          />
        );
      case "Single Line Input":
        return (
          <SingleLineInputComponent
            label={label.label}
            required={label.required}
          />
        );
      default:
        return null;
    }
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
        {savedFields.map((field, index) =>
          renderComponent(field.type, field.label)
        )}
      </CardContent>
    </Card>
  );
};

export default FormCard;
