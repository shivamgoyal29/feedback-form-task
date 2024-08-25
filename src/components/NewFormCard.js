import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import "./NewFormCard.css";

const NewFormCard = () => {
  return (
    <div id="newFromCard">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 91,
            height: 91,
            mb: 2,
          }}
        >
          <AddIcon sx={{ color: "#2F4ED7", fontSize: 100 }} />
        </Box>
        <Typography
          variant="h6"
          sx={{ color: "#000000", fontSize: 32, fontWeight: "Medium" }}
        >
          New form
        </Typography>
      </CardContent>
    </div>
  );
};

export default NewFormCard;
