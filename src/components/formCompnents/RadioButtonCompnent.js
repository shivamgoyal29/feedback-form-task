import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
  IconButton,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const RadioButtonComponent = () => {
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
        Question
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label={<Typography sx={{ fontSize: "14px" }}>Female</Typography>}
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label={<Typography sx={{ fontSize: "14px" }}>Male</Typography>}
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label={<Typography sx={{ fontSize: "14px" }}>Other</Typography>}
          />
        </RadioGroup>
      </FormControl>
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

export default RadioButtonComponent;
