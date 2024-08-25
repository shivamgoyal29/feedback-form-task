import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

const CreateNewFormModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "444px",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          boxShadow: `
            0px 8px 10px -5px rgba(0, 0, 0, 0.2),
            0px 16px 24px 2px rgba(0, 0, 0, 0.14),
            0px 6px 30px 5px rgba(0, 0, 0, 0.12)
          `,
        },
      }}
      elevation={16}
      square={false}
    >
      <DialogTitle sx={{ p: "16px 24px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "medium", fontSize: "20px" }}
        >
          Create Feedback Form
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ pb: 0 }}>
        <TextField
          autoFocus
          required
          id="FormName"
          name="FormName"
          label="Enter form name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="Text" color="Primary">
          <Typography
            sx={{ fontWeight: "medium", fontSize: "14px", color: "#189657" }}
          >
            Create
          </Typography>
        </Button>
        <Button variant="Text" color="Primary">
          <Typography
            sx={{ fontWeight: "medium", fontSize: "14px", color: "#19191957" }}
          >
            Cancel
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNewFormModal;
