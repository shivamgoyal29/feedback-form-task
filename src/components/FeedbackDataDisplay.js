import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const FeedbackDataDisplay = () => {
  const navigate = useNavigate();
  const { formID } = useParams();

  const [formData, setFormData] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);

  const handleBackClick = () => {
    navigate("/admin/dashboard");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch form data
        const formDocRef = doc(db, "forms", formID);
        const formDoc = await getDoc(formDocRef);
        console.log("yo yo", formDoc.data());

        setFormData(formDoc.data());
        console.log("yo yo 2", formData);

        // Fetch feedback data
        const feedbackCollectionRef = collection(db, "feedbacks");
        const feedbackQuerySnapshot = await getDocs(feedbackCollectionRef);

        const feedbacks = feedbackQuerySnapshot.docs
          .filter((doc) => doc.data().formID === formID) // Filter feedbacks by formID
          .map((doc) => doc.data());

        console.log("feedbacks", feedbacks);

        setFeedbackData(feedbacks || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [formID]);

  return (
    formData && (
      <Box
        marginTop="64px"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh", // Ensures the Box takes the full height of the viewport
          bgcolor: "transparent", // Optional: Set a background color for contrast
        }}
      >
        <Card
          sx={{
            minHeight: "600px",
            width: "1450px",
            overflow: "auto", // Allows scrolling if content overflows
            position: "relative",
            mt: "30px",
          }}
        >
          <CardHeader
            sx={{
              bgcolor: "#5A7BEF",
              color: "#fff",
            }}
            title={
              <Typography
                sx={{
                  fontSize: "24px", // Title size
                  fontWeight: "500",
                }}
              >
                {formData.formName}
              </Typography>
            }
            avatar={
              <IconButton aria-label="back" onClick={handleBackClick}>
                <ArrowBackIcon sx={{ color: "#fff" }} />
              </IconButton>
            }
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around", // Spread the items across the available space
                mb: "20px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "64px", fontWeight: "700" }}>
                  {formData.viewCount}
                </Typography>
                <Typography
                  sx={{ color: "#676767", fontSize: "24px", fontWeight: "400" }}
                >
                  Views
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "64px", fontWeight: "700" }}>
                  {formData.submitCount}
                </Typography>
                <Typography
                  sx={{ color: "#676767", fontSize: "24px", fontWeight: "400" }}
                >
                  Submitted
                </Typography>
              </Box>
            </Box>
            <>
              <Typography sx={{ fontWeight: "600", fontSize: "20px", mb: 2 }}>
                Form Logic
              </Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "14px", mb: 1 }}>
                Tageted URL: {formData.formLogic.URLlogic.path}
              </Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "14px", mb: 1 }}>
                Date: {formData.formLogic.dateLogic.date}
              </Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "14px", mb: 3 }}>
                Time:{formData.formLogic.timeLogic.time}
              </Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "20px", mb: 2 }}>
                Feedbacks
              </Typography>
            </>

            <Box>
              {" "}
              {feedbackData.map((feedback, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                      Feedback {index + 1}
                    </Typography>
                    <Typography sx={{ marginLeft: "auto", fontSize: "16px" }}>
                      {feedback.submittedAt.toDate().toLocaleDateString()}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {feedback.responses.map((response, indext) => (
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            mb: 1,
                            color: "#232323",
                          }}
                        >
                          {response.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            mb: 2,
                            color: "#232323",
                            opacity: "60%",
                          }}
                        >
                          {response.response}
                        </Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    )
  );
};

export default FeedbackDataDisplay;
