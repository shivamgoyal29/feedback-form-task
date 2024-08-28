import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import TextareaIcon from "@mui/icons-material/TextFields";
import SmileyIcon from "@mui/icons-material/InsertEmoticon";
import StarIcon from "@mui/icons-material/Star";
import CategoryIcon from "@mui/icons-material/Category";
import NumericIcon from "@mui/icons-material/Numbers";
import RadioButtonIcon from "@mui/icons-material/RadioButtonUnchecked";
import SingleLineInputIcon from "@mui/icons-material/Input";
import AddIcon from "@mui/icons-material/Add";
import TextareaBox from "./TextareaBox";

const SideBarFields = ({
  onSaveField,
  initialData,
  URLlogic,
  DateLogic,
  TimeLogic,
}) => {
  const [activeBox, setActiveBox] = useState(null);
  const [fieldType, setFieldType] = useState("");
  const [intiaialData1, setInitialData1] = useState({
    activeBox: null,
    initialData: {},
    id: undefined,
  });
  const [urlCondition, setUrlCondition] = useState("");
  const [urlConditionActive, setUrlConditionActive] = useState(false);
  const [specificDate, setSpecificDate] = useState("");
  const [activeDate, setActiveDate] = useState(false);
  const [specificTime, setSpecificTime] = useState("");
  const [activeTime, setActiveTime] = useState(false);

  // useEffect(() => {
  //   logic({
  //     URLlogic: { active: urlConditionActive, path: urlCondition },
  //     dateLogic: { active: activeDate, date: specificDate },
  //     timeLogic: { active: activeTime, time: specificTime },
  //   });
  // }, []);

  const handleUrlConditionChange = (e) => {
    setUrlCondition(e.target.value);
    URLlogic({ path: e.target.value, active: urlConditionActive });
  };

  const handleDateChange = (e) => {
    setSpecificDate(e.target.value);
    DateLogic({ date: e.target.value, active: activeDate });
  };

  const handleTimeChange = (e) => {
    setSpecificTime(e.target.value);
    TimeLogic({ time: e.target.value, active: activeTime });
  };

  const handleOpenBox = (box) => {
    setFieldType(box);
    setActiveBox(box);
  };
  const handleCloseBox = () => {
    setActiveBox(null);
    setInitialData1({ activeBox: null, initialData: {}, id: undefined });
  };

  const handleSaveField = (label) => {
    console.log("this:", label);
    onSaveField({ type: fieldType, label }); // Call the function passed from FormCard
    handleCloseBox(); // Close the active box
  };
  useEffect(() => {
    if (initialData) {
      handleOpenBox(initialData.activebox);
      setInitialData1(initialData);
    }
  }, [initialData]);

  const renderBox = () => {
    switch (activeBox) {
      case "Category":
      case "Radio Button":
        return (
          <TextareaBox
            initialData={intiaialData1.intialData}
            id={intiaialData1.id}
            onClose={handleCloseBox}
            onSave={handleSaveField}
            fieldType={activeBox} // Pass fieldType to TextareaBox
          />
        );
      case "Textarea":
      case "Smiley Rating":
      case "Rating":
      case "Numerical Rating":
      case "Single Line Input":
        return (
          <TextareaBox
            initialData={intiaialData1.intialData}
            id={intiaialData1.id}
            onClose={handleCloseBox}
            onSave={handleSaveField}
            fieldType={null} // No options for these types
          />
        );
      default:
        return null;
    }
  };
  return (
    <Box>
      {!activeBox && (
        <Box>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              maxWidth: "473px",
              padding: "14px", // Decreased by 1px
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "18px", // Decreased by 1px
                color: "#000000",
                marginBottom: "14px", // Decreased by 1px
              }}
            >
              Add Fields
            </Typography>
            <Stack spacing={1}>
              {[
                { icon: <TextareaIcon />, label: "Textarea" },
                { icon: <SmileyIcon />, label: "Smiley Rating" },
                { icon: <StarIcon />, label: "Rating" },
                { icon: <CategoryIcon />, label: "Category" },
                { icon: <NumericIcon />, label: "Numerical Rating" },
                { icon: <RadioButtonIcon />, label: "Radio Button" },
                { icon: <SingleLineInputIcon />, label: "Single Line Input" },
              ].map((field, index) => (
                <Button
                  key={index}
                  onClick={() => handleOpenBox(field.label)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // Ensures the space between content and plus sign
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#2B2B2B",
                    fontSize: "14px", // Decreased by 1px
                    fontWeight: "400",
                    padding: 0,
                    textAlign: "left",
                    "&:hover": {
                      backgroundColor: "#f0f0f0", // Light background on hover
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow on hover
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                    },
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    {field.icon}
                    <Typography sx={{ marginLeft: "6px" }}>
                      {field.label}
                    </Typography>
                  </Box>
                  <AddIcon
                    sx={{
                      fontSize: "20px", // Increased size
                      color: "#106EA4", // Color of the plus sign
                      padding: "4px", // Padding to ensure the plus sign is centered
                    }}
                  />
                </Button>
              ))}
            </Stack>
          </Box>
          {/* Logic box */}
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              maxWidth: "473px",
              padding: "14px", // Decreased by 1px
              marginTop: "14px", // Decreased by 1px
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "18px", // Decreased by 1px
                color: "#000000",
                marginBottom: "14px", // Decreased by 1px
              }}
            >
              Add Logic
            </Typography>
            <Stack spacing={2}>
              {/* URL Input Field */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between", // Adjust spacing between elements
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontSize: "12px", // Decreased by 1px
                      color: "#4C4545",
                      marginBottom: "6px", // Decreased by 1px
                    }}
                  >
                    Show based on URL conditions
                  </Typography>
                  <Switch
                    checked={urlConditionActive}
                    onChange={(e) => setUrlConditionActive(e.target.checked)}
                  />
                </Box>

                <Box>
                  <TextField
                    variant="standard"
                    fullWidth
                    size="small"
                    value={urlCondition}
                    onChange={handleUrlConditionChange}
                  />{" "}
                  {/* Decreased size */}
                </Box>
              </Box>
              {/* Date Input Field */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between", // Adjust spacing between elements
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontSize: "12px", // Decreased by 1px
                      color: "#4C4545",
                      marginBottom: "6px", // Decreased by 1px
                    }}
                  >
                    Show on a specific date
                  </Typography>
                  <Switch
                    checked={activeDate}
                    onChange={(e) => setActiveDate(e.target.checked)}
                  />
                </Box>
                <TextField
                  label="Select Date"
                  type="date"
                  variant="outlined"
                  size="small" // Decreased size
                  fullWidth
                  value={specificDate}
                  onChange={handleDateChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              {/* Time Input Field */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between", // Adjust spacing between elements
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontSize: "12px", // Decreased by 1px
                      color: "#4C4545",
                      marginBottom: "6px", // Decreased by 1px
                    }}
                  >
                    Show on a specific time
                  </Typography>
                  <Switch
                    checked={activeTime}
                    onChange={(e) => setActiveTime(e.target.checked)}
                  />
                </Box>

                <TextField
                  label="Select Time"
                  type="time"
                  variant="outlined"
                  size="small" // Decreased size
                  fullWidth
                  value={specificTime}
                  onChange={handleTimeChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      )}
      {renderBox()}
    </Box>
  );
};

export default SideBarFields;
