import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Card } from "@mui/material";
import NewFormCard from "./NewFormCard";
import CreateNewFormMoadal from "./CreateNewFormModal";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="dashboard">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 4 }}
      >
        {/* New Form Card */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              bgcolor: "#ffffff",
              height: "379px",
              borderRadius: "8px 0px 0px 0px",
              boxShadow: "0px 4px 4px 0px #00000040",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            <NewFormCard />
          </Card>
        </Grid>
      </Grid>
      <CreateNewFormMoadal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Dashboard;
