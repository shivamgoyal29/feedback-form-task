# Feedback Form Task

Welcome to the Feedback Form Task repository! This project involves developing a system for creating, managing, and displaying feedback forms. Below is a comprehensive overview of the project, including tasks, features, and technical details.

## Live Demo

- [Admin Dashboard](https://feedback-form-task.web.app/admin/dashboard)

  Form will work on:
- [Feedback Form - Home](https://feedback-form-task.web.app/website/home)
- [Feedback Form - About](https://feedback-form-task.web.app/website/about)
- [Home](https://feedback-form-task.web.app/)


## Task Brief

Develop a system where users can:

1. **Create and Manage Feedback Forms**
   - Create multiple feedback forms with 1 to 7 fields.
   - Field types: Star Rating, Smile Rating, Text Area, Radio Buttons, Categories, Numerical Rating, and Single Line Input.
   - Configure fields with editable labels, required status, and custom error messages.
   - Rearrange fields using drag-and-drop, and edit/delete them.
   - Apply logic for displaying forms based on pages, timing, or other criteria.
   - Ensure that once a form is submitted or a modal is closed, the form does not reappear.

2. **Admin Panel**
   - **Dashboard:** 
     - List all feedback forms created by the user.
     - Option to add new feedback forms.
   - **Form Creation and Editing:**
     - Create and edit forms with configurable fields.
     - Apply logic options and manage form visibility.
   - **Feedback Form Detail Page:**
     - Display all user submissions with timestamps.
     - Show form creation date, view count, and submission count.
     - Display applied logic details.

3. **Website Integration**
   - Render feedback forms in a modal on the website based on admin panel logic.
   - Prevent the form from showing again after submission or modal closure.

4. **Feedback Storage**
   - Use Firebase Firestore or another database to store submissions, form structure, and field values.

5. **UI Library**
   - Use Material UI or another UI library for styling and layout.

## Figma Design

- [Figma Design Link](https://www.figma.com/design/5WH64DX6tESBP8lv3K35s5/Custom-Feedback-Form-Builder?node-id=0-1&t=CIm1RPxv2Mmw93SG-1)

## Technical Details

### Frontend

- **Framework:** React
- **Hooks:** Utilizes various React hooks for state management, effect handling, and more.
- **UI Library:** Material UI for components and styling.

### Hosting and Storage

- **Hosting:** Firebase Hosting
- **Storage:** Firebase Firestore or an equivalent database for storing feedback data.

### Routes

- Admin Panel:
  - `/admin/dashboard`
  - `/admin/create-form`
  - `/admin/feedback-data/:formID`

- Website:
  - `/website/home`
  - `/website/about`
  - `/website/services`
  - `/website/contact`
 
The form will work on the following:
- [Feedback Form - Home](https://feedback-form-task.web.app/website/home)
- [Feedback Form - About](https://feedback-form-task.web.app/website/about)
- [Home](https://feedback-form-task.web.app/)


### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shivamgoyal29/feedback-form-task.git
   cd feedback-form-task
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Ensure that your Firebase configuration is properly set up in the project.
   - Create and configure Firebase Firestore and Hosting.

4. **Build and Deploy**

   ```bash
   npm run build
   firebase deploy
   ```

5. **Run Locally**

   ```bash
   npm start
   ```
