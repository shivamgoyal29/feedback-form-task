import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Box } from "@mui/material";
import FormSidebar from "./SideBarComponentsBoxes/FormSideBar";
import FormCard from "./FormCard";
import CreateNewFormModal from "./CreateNewFormModal";
import { useLocation } from "react-router-dom";
import { saveFormData } from "../firebase/fireBaseOperations";

const NewFormDashboard = forwardRef(({ onFormSaved }, ref) => {
  const [savedFields, setSavedFields] = useState([]);
  const [initialData1, setInitialData1] = useState({});
  const [uniqueID, setUniqueId] = useState(1);
  const [uRLlogic, setURLlogic] = useState({ active: false, path: "" });
  const [dateLogic, setDateLogic] = useState({ active: false, date: "" });
  const [timeLogic, setTimeLogic] = useState({ active: false, time: "" });

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

  const handleUrlLogic = (URLlogic) => {
    setURLlogic(URLlogic);
    console.log(URLlogic);
  };

  const handleDateLogic = (logic) => {
    setDateLogic(logic);
  };

  const handleTimeLogic = (logic) => {
    setTimeLogic(logic);
  };

  async function handleSaveFrom({ publish }) {
    console.log("publish", publish);
    const formProperties = {
      formID: "",
      formName: formName,
      publishStatus: publish,
      viewCount: 0,
      submitCount: 0,
      formLogic: {
        URLlogic: uRLlogic,
        timeLogic: timeLogic,
        dateLogic: dateLogic,
      },
      inputFields: savedFields.map((savedField) => ({
        ID: savedField.id, // Make sure ID is correctly mapped
        label: savedField.label.label,
        type: savedField.type || "", // Default type if not provided
        required: savedField.label.required || false,
        errorMessage: savedField.label.errorMessage || "",
        options: savedField.label.options || [],
      })),
      // inputFields: [
      //   {
      //     ID: 0,
      //     label: "",
      //     type: "textarea",
      //     reuired: false,
      //     errorMessage: "",
      //     options: [],
      //   },
      // ],
    };

    await saveFormData(formProperties); // Save form data to Firebase
    console.log("Data Saved", savedFields);
    onFormSaved();

    console.log("Data Saved");
    console.log(formProperties);
    if (publish) {
      console.log("Published");
      // Handle publishing logic
    }
    // Perform save operations here, like API calls
  }

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

      <FormSidebar
        onSaveField={handleSaveField}
        initialData={initialData1}
        URLlogic={handleUrlLogic}
        DateLogic={handleDateLogic}
        TimeLogic={handleTimeLogic}
      />
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
