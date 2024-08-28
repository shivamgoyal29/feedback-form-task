export const formProperties = {
  formID: "",
  formName: "",
  publishStatus: false,
  publishedDate: null,
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
      type: "",
      required: false,
      errorMessage: "",
      options: [],
    },
  ],
};

export const feedbackData = {
  formID: "",
  feedbackID: "",
  responses: [
    {
      fieldID: 0,
      label: "",
      response: "",
    },
  ],
  submittedAt: null,
};
