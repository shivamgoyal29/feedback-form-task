import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import TextComponent from "./formComponents/TextCompnent";
import NumericRatingComponent from "./formComponents/NumericRatingCompnent";
import StarRatingComponent from "./formComponents/StarRatingComponet";
import SmileyRatingComponent from "./formComponents/SmileyRtingComponent";
import SingleLineInputComponent from "./formComponents/SingleLineInputComponent";
import RadioButtonComponent from "./formComponents/RadioButtonCompnent";
import CategoriesComponent from "./formComponents/CategoriesComponent";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FormCard = ({
  savedFields,
  onEditField,
  onDeleteField,
  formModal,
  formName,
}) => {
  //   const [fields, setFields] = useState(savedFields);
  const navigate = useNavigate();
  const handleEditClick = () => {
    formModal({ open: true, edit: "Edit", formName1: formName });
  };

  const handleBackClick = () => {
    navigate("/admin/dashboard");
  };
  //   const onDragEnd = (result) => {
  //     if (!result.destination) return;
  //     const reorderedFields = Array.from(fields);
  //     const [movedField] = reorderedFields.splice(result.source.index, 1);
  //     reorderedFields.splice(result.destination.index, 0, movedField);
  //     setFields(reorderedFields);
  //   };

  const renderComponent = (type, label, id) => {
    switch (type) {
      case "Textarea":
        return (
          <TextComponent
            label={label.label}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Smiley Rating":
        return (
          <SmileyRatingComponent
            label={label.label}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Rating":
        return (
          <StarRatingComponent
            label={label.label}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Category":
        return (
          <CategoriesComponent
            label={label.label}
            options={label.options}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Numerical Rating":
        return (
          <NumericRatingComponent
            label={label.label}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Radio Button":
        return (
          <RadioButtonComponent
            label={label.label}
            options={label.options}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      case "Single Line Input":
        return (
          <SingleLineInputComponent
            label={label.label}
            required={label.required}
            onEdit={onEditField}
            id={id}
            onDelete={onDeleteField}
            type={type}
            errorMessage={label.errorMessage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        pb: "16px",
      }}
    >
      <CardHeader
        sx={{ bgcolor: "#5578F4", color: "white" }}
        title={
          <Box display="flex" alignItems="center" width="100%">
            <IconButton
              aria-label="back"
              color="inherit"
              onClick={handleBackClick}
            >
              <ArrowBackIosSharpIcon />
            </IconButton>

            <Box display="flex" alignItems="center" flexGrow={1}>
              <Typography
                variant="h6"
                sx={{ marginRight: "8px", fontSize: "24px" }}
              >
                {formName}
              </Typography>

              <IconButton
                aria-label="edit"
                color="inherit"
                onClick={handleEditClick}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px", // Space between components
          paddingBottom: "16px", // Extra padding at the bottom
        }}
      >
        {savedFields.map((field, index) =>
          renderComponent(field.type, field.label, field.id)
        )}
      </CardContent>
      {/* <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px", // Space between components
          paddingBottom: "16px", // Extra padding at the bottom
        }}
      > */}
      {/* <DragDropContext>
          <Droppable droppableId="savedFields">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {savedFields.map((field, index) => {
                  return (
                    <Draggable
                      key={field.id.toString()}
                      draggableId={field.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {renderComponent(field.type, field.label, field.id)}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext> */}
      {/* </CardContent> */}
      {/* <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingBottom: "16px",
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="fields">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {fields.map((field, index) => (
                  <Draggable
                    key={field.id}
                    draggableId={field.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {renderComponent(field.type, field.label, field.id)}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardContent> */}
    </Card>
  );
};

export default FormCard;
