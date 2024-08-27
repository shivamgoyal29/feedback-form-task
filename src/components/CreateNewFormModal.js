import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateNewFormModal = ({ open, handleClose, create, formName1 }) => {
  const [formName, setFormName] = useState("");
  const navigate = useNavigate();

  const x = formName1;

  useEffect(() => {
    if (x) {
      setFormName(x);
    }
  }, [x]);

  const createFormHandler = () => {
    handleClose();
    navigate("/admin/create-form", { state: formName });
  };
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
          {create} Feedback Form
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
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="Text" color="Primary" onClick={createFormHandler}>
          <Typography
            sx={{ fontWeight: "medium", fontSize: "14px", color: "#189657" }}
          >
            {create}
          </Typography>
        </Button>
        <Button variant="Text" color="Primary" onClick={handleClose}>
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
