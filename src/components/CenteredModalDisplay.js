import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import DisplayFormModal from "./displayFormModal";
import { useLocation } from "react-router-dom";
import { format, set } from "date-fns";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const CenteredModalDisplay = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd");
  const formattedTime = format(now, "HH:mm");

  const [forms, setForms] = useState([]);
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "forms"));
        const formsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const publishedDate = data.publishedDate;

          // Check if the timestamp is a Firestore Timestamp object
          const date = publishedDate
            ? publishedDate.toDate().toLocaleDateString()
            : "";

          return {
            ...data,
            publishedDate: date, // Convert the timestamp to a Date object
          };
        });

        console.log(formsData);

        setForms(formsData);
      } catch (error) {
        console.error("Error fetching forms: ", error);
      }
    };
    console.log("here");
    fetchForms();
  }, []);

  useEffect(() => {
    const formsArray = forms;
    const matchedForm =
      formsArray.find((form) => {
        const pathMatch = form.formLogic.URLlogic.path === currentPath;
        const dateMatch =
          !form.formLogic.dateLogic.active ||
          form.formLogic.dateLogic.date <= formattedDate;
        const timeMatch =
          !form.formLogic.timeLogic.active ||
          form.formLogic.timeLogic.date <= formattedTime;

        return pathMatch && dateMatch && timeMatch;
      }) || null;

    if (matchedForm && matchedForm !== currentForm) {
      setCurrentForm(matchedForm);
      setOpen(true);

      const formRef = doc(db, "forms", matchedForm.formID);
      updateDoc(formRef, {
        viewCount: (matchedForm.viewCount || 0) + 1,
      }).catch((error) => {
        console.error("Error updating view count: ", error);
      });
    }

    console.log("matchedForm", matchedForm);
  }, [currentPath, forms, currentForm, formattedDate, formattedTime]); // Remove currentForm from the dependencies

  const handleClose = () => {
    if (currentForm) {
      localStorage.setItem(`formSeen_${currentForm.formID}`, "true");
    }
    console.log("closed");
    setOpen(false);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          position="relative"
          zIndex={1000} // Ensure the modal is above the iframe
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <DisplayFormModal
            currentForm={currentForm}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default CenteredModalDisplay;
