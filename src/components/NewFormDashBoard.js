import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Box } from "@mui/material";
import FormSidebar from "./FormSideBar";
import FormCard from "./FormCard";
import CreateNewFormModal from "./CreateNewFormModal";
import { useLocation } from "react-router-dom";

const NewFormDashboard = forwardRef((props, ref) => {
  const [savedFields, setSavedFields] = useState([]);
  const [initialData1, setInitialData1] = useState({});
  const [uniqueID, setUniqueId] = useState(1);

  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState("");
  const [formName, setFormName] = useState("");

  const handleOpen = (open) => {
    setOpen(open.open);
    setCreate(open.edit);

    setFormName(open.formName1);
    console.log("thise is:", formName);
  };

  const location = useLocation();
  const initialFormName = location.state;
  useEffect(() => {
    if (initialFormName) {
      setFormName(initialFormName);
    }
  }, [initialFormName]);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(savedFields);
  }, [savedFields]);

  const handleSaveField = (label) => {
    console.log(label);
    if (typeof label.label.id === "undefined") {
      const newField = { ...label, id: uniqueID };

      setSavedFields((prevFields) => [...prevFields, newField]);

      setUniqueId((prevId) => prevId + 1);
    } else {
      setSavedFields((prevFields) =>
        prevFields.map((field) =>
          field.id === label.label.id ? { ...field, ...label } : field
        )
      );
    }
  };

  const handleInitialData = (initialData) => {
    setInitialData1(initialData);
  };

  const handleDeleteField = (id) => {
    setSavedFields((prevFields) =>
      prevFields.filter((field) => field.id !== id.id)
    );
  };

  const handleSaveFrom = ({ publish }) => {
    const formProperties = {
      formID: "1",
      formName: formName,
      publishStatus: publish,
      publishedDate: "",
      viewCount: 0,
      submitCount: 0,
      formLogic: {
        URLlogic: { active: false, path: "" },
        timeLogic: { active: false, time: "" },
        dateLogic: { active: false, date: "" },
      },
      inputFields: [
        {
          ID: 0,
          label: "",
          type: "textarea",
          reuired: false,
          errorMessage: "",
          options: [],
        },
      ],
    };

    console.log("Data Saved");
    console.log(formProperties);
    if (publish) {
      console.log("Published");
      // Handle publishing logic
    }
    // Perform save operations here, like API calls
  };

  useImperativeHandle(ref, () => ({
    handleSaveFrom,
  }));

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
        <FormCard
          savedFields={savedFields}
          onEditField={handleInitialData}
          onDeleteField={handleDeleteField}
          formModal={handleOpen}
          formName={formName}
        />
      </Box>

      <FormSidebar onSaveField={handleSaveField} initialData={initialData1} />
      <CreateNewFormModal
        open={open}
        handleClose={handleClose}
        create={create}
        formName1={formName}
      />
    </Box>
  );
});

export default NewFormDashboard;
