import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Switch,
  IconButton,
} from "@mui/material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TextareaBox = ({ onClose, onSave, fieldType }) => {
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState([""]); // Initial empty option
  const [required, setRequired] = useState(false);

  const handleSwitchChange = (event) => {
    setRequired(event.target.checked);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]); // Add a new empty option
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index)); // Remove the option at index
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSave = () => {
    onSave({ label, options, required }); // Pass label and options to the parent
    onClose(); // Close the TextareaBox after saving
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        maxWidth: "473px",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Back to Add Fields Button */}
      <Box>
        <Button
          onClick={onClose}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#4B4949",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <ArrowBackIosSharpIcon sx={{ marginRight: "8px" }} />
          <Typography
            sx={{
              color: "#4B4949",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Back to Add Fields
          </Typography>
        </Button>
      </Box>

      <TextField
        variant="standard"
        label="Label"
        fullWidth
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      {/* Options Section */}
      {(fieldType === "Category" || fieldType === "Radio Button") && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "16px" }}>
            Options
          </Typography>
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <TextField
                variant="standard"
                label={`Option ${index + 1}`}
                fullWidth
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              {options.length > 1 && (
                <IconButton
                  aria-label="remove"
                  onClick={() => handleRemoveOption(index)}
                  sx={{ color: "red" }}
                >
                  <RemoveIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            onClick={handleAddOption}
            startIcon={<AddIcon />}
            sx={{ alignSelf: "flex-start" }}
          >
            Add Option
          </Button>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Switch checked={required} onChange={handleSwitchChange} />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Required
        </Typography>
      </Box>

      {required && (
        <TextField variant="standard" label="Error message" fullWidth />
      )}

      {/* Save and Cancel Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            bgcolor: "#2196F3",
            boxShadow:
              "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",
          }}
        >
          SAVE
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#F5F5F5",
            color: "#000000",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
          size="large"
          onClick={onClose}
        >
          CANCEL
        </Button>
      </Box>
    </Box>
  );
};

export default TextareaBox;
