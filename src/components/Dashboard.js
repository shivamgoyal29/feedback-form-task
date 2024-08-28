import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Card } from "@mui/material";
import NewFormCard from "./NewFormCard";
import CreateNewFormModal from "./CreateNewFormModal";
import DisplayFormCard from "./DashboardFormCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState("");

  const [forms, setForms] = useState([]);
  useEffect(() => {
    const fetchForms = async () => {
      console.log("Fetching forms...");
      try {
        const querySnapshot = await getDocs(collection(db, "forms"));
        const formsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const publishedDate = data.publishedDate;

          const date = publishedDate
            ? publishedDate.toDate().toLocaleDateString()
            : "";

          return {
            ...data,
            publishedDate: date,
          };
        });

        console.log("Forms data fetched:", formsData.forms);
        setForms(formsData);
      } catch (error) {
        console.error("Error fetching forms: ", error);
      }
    };

    fetchForms();
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setCreate("Create");
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box marginTop="64px">
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
        {forms &&
          forms.map((form, index) => (
            <Grid>
              <Card
                sx={{
                  bgcolor: "#ffffff",
                  height: "379px",
                  borderRadius: "8px 0px 0px 0px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  minWidth: "345px",
                }}
              >
                <DisplayFormCard
                  title={form.formName}
                  viewCount={form.viewCount}
                  submitCount={form.submitCount}
                  publishDate={form.publishedDate}
                  formID={form.formID}
                />
              </Card>
            </Grid>
          ))}
      </Grid>
      <CreateNewFormModal
        open={open}
        handleClose={handleClose}
        create={create}
      />
    </Box>
  );
};

export default Dashboard;
