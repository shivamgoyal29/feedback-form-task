import React, { useState } from "react";
import { Box } from "@mui/material";
import FormSidebar from "./FormSideBar";
import Navbar from "./Navbar";
import FormCard from "./FormCard";

const NewFormDashboard = () => {
  const [savedFields, setSavedFields] = useState([]);

  const handleSaveField = (label) => {
    setSavedFields((prevFields) => [...prevFields, label]);
  };

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
        <FormCard savedFields={savedFields} />
      </Box>

      <FormSidebar onSaveField={handleSaveField} />
    </Box>
  );
};

export default NewFormDashboard;
