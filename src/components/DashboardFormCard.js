import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import surveyLogo from "../stactic/images/survey.png";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const DisplayFormCard = ({
  title,
  submitCount,
  viewCount,
  publishDate,
  formID,
}) => {
  const navigate = useNavigate();
  console.log("publish date of", title, publishDate);
  const handleDelete = async () => {
    try {
      // Reference to the Firestore document
      const formDocRef = doc(db, "forms", formID);
      // Delete the document
      await deleteDoc(formDocRef);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting form: ", error);
    }
  };
  const handleViewSubmission = () => {
    navigate(`/admin/feedback-data/${formID}`);
  };
  return (
    <Card
      sx={{
        height: "100%", // Make the card fill the parent's height
        width: "100%", // Make the card fill the parent's width
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Survey Logo"
            src={surveyLogo}
            sx={{ bgcolor: "#ffffff", width: 48, height: 48 }}
          />
        }
        sx={{
          bgcolor: "#F5D563",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      />
      <CardContent sx={{ textAlign: "left", padding: "16px 24px" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "20px", fontWeight: "500", mb: 2 }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Submitted:
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {submitCount}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Viewed
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {viewCount}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Published Date:
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {publishDate ? publishDate : "Form not published"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#9C27B0",
              color: "#ffffff",
              fontWeight: "500",
              fontSize: "15px",
              width: "250px",
              height: "49px",
            }}
            startIcon={<VisibilityIcon />}
            onClick={handleViewSubmission}
          >
            View Submission
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px", // Match the width of the View Submission button
              mt: 1, // Add some space between the buttons
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2E7D32",
                color: "#ffffff",
                fontWeight: "500",
                fontSize: "15px",
                height: "49px",
                width: "49%", // Edit button takes 49% of the width
              }}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2196F3",
                color: "#ffffff",
                fontWeight: "500",
                fontSize: "15px",
                height: "49px",
                width: "49%", // Delete button takes 49% of the width
              }}
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DisplayFormCard;
