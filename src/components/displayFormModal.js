import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { saveFeedbackData } from "../firebase/fireBaseOperations";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextareaFormComponent from "./displayFormModelComponents/TextareaFormComponent";
import RadioButtonFormComponent from "./displayFormModelComponents/RadioButtonFormComponent";
import NumericRatingFormComponent from "./displayFormModelComponents/NumericRatingFormComponent";
import SingleLineInputFormComponent from "./displayFormModelComponents/SingleLineInputFormComponent";
import SmileyRatingFormComponent from "./displayFormModelComponents/SmileyRatingFormComponent";
import StarRatingFormComponent from "./displayFormModelComponents/StarRatingFormComponent";
import CategoriesFormComponent from "./displayFormModelComponents/CategoriesFormComponent";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const DisplayFormModal = ({ currentForm, handleClose }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    currentForm.inputFields.forEach((field) => {
      if (
        field.required &&
        (!inputData[field.ID] || !inputData[field.ID].response)
      ) {
        formErrors[field.ID] = field.errorMessage || "This field is required.";
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return; // Stop submission if validation fails
    }

    // Handle form submission logic here
    const feedback = {
      formID: currentForm.formID,
      feedbackID: "", // Will be generated automatically
      responses: Object.values(inputData),
      submittedAt: null,
    };

    try {
      // Save feedback data to Firestore
      const feedbackID = await saveFeedbackData(feedback);
      console.log("Feedback submitted with ID: ", feedbackID);
      const formRef = doc(db, "forms", currentForm.formID);
      updateDoc(formRef, {
        submitCount: (currentForm.submitCount || 0) + 1,
      }).catch((error) => {
        console.error("Error updating view count: ", error);
      });
      handleClose();
    } catch (error) {
      console.error("Error submitting feedback: ", error);
    }
    console.log("Form submitted!");
  };

  const [inputData, setInputData] = useState({});

  const handleInput = (id, label, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [id]: { label: label, response: value, fieldID: id }, // Update the specific field in the form data
    }));
    console.log("input data:", inputData);
  };

  useEffect(() => {
    console.log("Updated input data:", inputData);
  }, [inputData]);

  const renderComponent = (field) => {
    console.log(field.type);
    switch (field.type) {
      case "Textarea":
        return (
          <TextareaFormComponent
            label={field.label}
            id={field.ID}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Smiley Rating":
        return (
          <SmileyRatingFormComponent
            label={field.label}
            id={field.ID}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Rating":
        return (
          <StarRatingFormComponent
            label={field.label}
            id={field.ID}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Category":
        return (
          <CategoriesFormComponent
            label={field.label}
            id={field.ID}
            options={field.options}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Numerical Rating":
        return (
          <NumericRatingFormComponent
            label={field.label}
            id={field.ID}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Radio Button":
        return (
          <RadioButtonFormComponent
            label={field.label}
            id={field.ID}
            options={field.options}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      case "Single Line Input":
        return (
          <SingleLineInputFormComponent
            label={field.label}
            id={field.ID}
            required={field.required}
            errorMessage={field.errorMessage}
            onChange={handleInput}
          />
        );
      default:
        return console.log("not rendered", field);
    }
  };

  return (
    <Card
      sx={{
        width: "500px",
        maxHeight: "550px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        pb: "16px",
        position: "relative", // For positioning the close button
      }}
    >
      <CardHeader
        sx={{ bgcolor: "#5578F4", color: "white" }}
        title={
          <Box display="flex" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Typography
                variant="h6"
                sx={{ marginRight: "8px", fontSize: "24px" }}
              >
                {currentForm ? currentForm.formName : "Form Title"}
              </Typography>{" "}
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                sx={{
                  color: "white",
                  padding: "8px",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <CardContent
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px", // Space between components
          paddingBottom: "16px", // Extra padding at the bottom

          overflowY: "auto", // Enable vertical scrolling
          maxHeight: "calc(100% - 64px)", // Adjust for CardHeader height
        }}
      >
        {currentForm ? (
          currentForm.inputFields.map((field, index) => renderComponent(field))
        ) : (
          <Typography>no form data</Typography>
        )}

        {/* Submit button */}
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DisplayFormModal;
