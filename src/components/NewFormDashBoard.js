import React from "react";
import { Box } from "@mui/material";
import FormSidebar from "./FormSideBar";
import Navbar from "./Navbar";
import FormCard from "./FormCard";

const NewFormDashboard = () => {
  return (
    <Box display="flex" height="100vh" flexDirection="row" marginTop="64px">
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        alignItems="center"
        padding="16px"
        sx={{ pt: "50px", mb: "16px" }}
      >
        <FormCard />
      </Box>

      <FormSidebar />
    </Box>
  );
};

export default NewFormDashboard;
