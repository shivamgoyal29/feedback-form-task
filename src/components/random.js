// // import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "../stactic/images/feedback_logo.png";

// // export default function ButtonAppBar() {
// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static" sx={{ bgcolor: "#ffffff" }}>
// //         <Toolbar>
// //           <Box component="img" src={Logo} sx={{ height: 64 }} />
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             USER FEEDBACK
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
// //   );
// // }

// // /* background */

// // position: absolute;
// // width: 1920px;
// // height: 1080px;

// // background: #F3F3F3;

// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   IconButton,
// } from "@mui/material";
// import {
//   AddCircleOutline,
//   Edit,
//   Delete,
//   Visibility,
// } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";
// // import { db } from "../firebase";
// // import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// const Dashboard = () => {
//   //   const [forms, setForms] = useState([]);
//   //   const navigate = useNavigate();

//   //   useEffect(() => {
//   //     const fetchForms = async () => {
//   //       const formCollection = collection(db, "forms");
//   //       const formSnapshot = await getDocs(formCollection);
//   //       const formList = formSnapshot.docs.map((doc) => ({
//   //         id: doc.id,
//   //         ...doc.data(),
//   //       }));
//   //       setForms(formList);
//   //     };
//   //     fetchForms();
//   //   }, []);

//   //   const handleDelete = async (id) => {
//   //     await deleteDoc(doc(db, "forms", id));
//   //     setForms(forms.filter((form) => form.id !== id));
//   //   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ bgcolor: "#ffffff" }}>
//           <Toolbar>
//             <Box component="img" src={Logo} sx={{ height: 64 }} />
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               USER FEEDBACK
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </Box>

//       <Grid container spacing={3}>
//         {/* Create New Form Card */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             // onClick={() => navigate("/create-form")}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "200px",
//               cursor: "pointer",
//               backgroundColor: "#f5f5f5",
//             }}
//           >
//             <AddCircleOutline style={{ fontSize: "50px" }} />
//             <Typography variant="h6" style={{ marginLeft: "10px" }}>
//               New form
//             </Typography>
//           </Card>
//         </Grid>

//         {/* Existing Forms
//         {forms.map((form) => (
//           <Grid item xs={12} sm={6} md={4} key={form.id}>
//             <Card style={{ height: "200px", backgroundColor: "#f0f4c3" }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   {form.name}
//                 </Typography>
//                 <Typography>Submitted: {form.submitted || 0}</Typography>
//                 <Typography>Viewed: {form.viewed || 0}</Typography>
//                 <Typography>Date Published: {form.publishedDate}</Typography>
//                 <div style={{ marginTop: "20px" }}>
//                   <Button
//                     variant="contained"
//                     style={{ marginRight: "10px", backgroundColor: "#9c27b0" }}
//                     onClick={() => navigate(`/view-submission/${form.id}`)}
//                     startIcon={<Visibility />}
//                   >
//                     View Submission
//                   </Button>
//                   <IconButton
//                     color="primary"
//                     onClick={() => navigate(`/edit-form/${form.id}`)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(form.id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))} */}
//       </Grid>
//     </div>
//   );
// };

// export default Dashboard;
