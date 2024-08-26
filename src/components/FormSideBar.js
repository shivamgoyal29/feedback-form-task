import React from "react";
import { Box, Drawer } from "@mui/material";
import SideBarFields from "./SideBarFields";

const FormSidebar = ({ onSaveField }) => {
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
          top: 64,
          height: "100vh",
          overflowY: "auto",
        },
      }}
    >
      <Box width="100%" bgcolor="#ffffff">
        <SideBarFields onSaveField={onSaveField} />
      </Box>
    </Drawer>
  );
};

export default FormSidebar;
