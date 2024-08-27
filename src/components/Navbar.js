import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography, Toolbar, Button } from "@mui/material";
import Logo from "../stactic/images/feedback_logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onSave }) => {
  const location = useLocation();

  const isCreateFormPage = location.pathname === "/admin/create-form";

  const navigate = useNavigate();
  const handleSave = (publish = false) => {
    onSave(publish);
    navigate("/admin/dashboard");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#ffffff", zIndex: "1200" }}>
        <Toolbar>
          <Box component="img" src={Logo} sx={{ height: 64 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#262626" }}
          >
            USER FEEDBACK
          </Typography>
          {isCreateFormPage && (
            <Box>
              <Button
                onClick={() => handleSave(false)}
                size="large"
                bgcolor="primary"
                variant="contained"
                sx={{
                  p: "8px 22px",
                  color: "#2196f3",
                  width: "82px",
                  height: "42px",
                  borderRadius: "var(--borderRadius)",
                  boxShadow: `
                0px 3px 1px -2px #00000033,
                0px 2px 2px 0px #00000024,
                0px 1px 5px 0px #0000001F
              `,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    color: "#ffffff",
                  }}
                >
                  Save
                </Typography>
              </Button>
              <Button
                onClick={() => handleSave(true)}
                size="large"
                variant="contained"
                sx={{
                  p: "8px 22px",
                  bgcolor: "#2E7D32",
                  width: "82px",
                  height: "42px",
                  borderRadius: "var(--borderRadius)",
                  boxShadow: `
                0px 3px 1px -2px #00000033,
                0px 2px 2px 0px #00000024,
                0px 1px 5px 0px #0000001F
              `,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "15px",
                    color: "#ffffff",
                  }}
                >
                  Publish
                </Typography>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
