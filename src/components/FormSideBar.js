import React from "react";
import { Box, Drawer, Typography } from "@mui/material";

const FormSidebar = () => {
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      sx={{
        width: 317,
        flexShrink: 0,
        zIndex: 1100,
        "& .MuiDrawer-paper": {
          width: 317,
          boxShadow: "0px 4px 4px 0px #00000040",
          position: "fixed",
          height: "100vh",
          top: 64,
        },
      }}
    >
      <Box
        width="100%"
        height="100%"
        bgcolor="#ffffff"
        sx={{
          overflow: "auto",
        }}
      >
        <Typography variant="h6">lorem500</Typography>
        {/* Additional content can go here */}
      </Box>
    </Drawer>
  );
};

export default FormSidebar;
