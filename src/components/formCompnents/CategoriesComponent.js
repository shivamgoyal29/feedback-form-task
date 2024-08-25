import React from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const GridButtonComponent = () => {
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
        Choose an Option
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              border: "1px solid #00000052",
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "400" }}
            >
              Option 1
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              border: "1px solid #00000052",
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "400" }}
            >
              Option 2
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              border: "1px solid #00000052",
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "400" }}
            >
              Option 3
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              border: "1px solid #00000052",
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "400" }}
            >
              Option 4
            </Typography>
          </Button>
        </Grid>
      </Grid>
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

export default GridButtonComponent;
