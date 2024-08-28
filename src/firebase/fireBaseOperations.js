import { formProperties } from "./schema";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase-config"; // Your Firebase config file

export const saveFormData = async (form) => {
  try {
    // Create a new form object based on the schema
    const initialFormData = {
      ...formProperties,
      formName: form.formName,
      publishStatus: form.publishStatus,
      publishedDate: form.publishStatus ? serverTimestamp() : null,
      formLogic: form.formLogic,
      inputFields: form.inputFields,
    };

    let formData;
    let docRef;

    // If formID is not provided, generate a new one
    if (!form.formID) {
      // Create a new document in Firestore and get the ID
      docRef = await addDoc(collection(db, "forms"), initialFormData);
      formData = {
        ...initialFormData,
        formID: docRef.id,
      };
      console.log("id:", formData.formID);
    } else {
      // If formID is provided, use it to update the existing document
      formData = {
        ...initialFormData,
        formID: form.formID, // Use provided formID
      };
      docRef = doc(db, "forms", formData.formID);
    }

    // Update or set the document with the correct ID
    await setDoc(docRef, formData);

    console.log("Form saved with ID: ", formData.formID);
    return formData.formID;
  } catch (e) {
    console.error("Error saving form data: ", e);
  }
};

export const saveFeedbackData = async (feedback) => {
  try {
    const docRef = await addDoc(collection(db, "feedbacks"), {
      ...feedback,
      submittedAt: serverTimestamp(),
    });

    const feedbackData = {
      ...feedback,
      feedbackID: docRef.id,
      submittedAt: serverTimestamp(),
    };

    await setDoc(docRef, feedbackData);

    console.log("Feedback saved with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error saving feedback data: ", e);
  }
};
