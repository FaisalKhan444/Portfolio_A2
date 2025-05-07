// src/components/Header.jsx
import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { PageTitleContext } from "../context/PageTitleContext";

const Header = () => {
  const { title } = useContext(PageTitleContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#0f4c75",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, letterSpacing: 0.5 }}
          >
            Faisal Khan
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: "medium", color: "#bbe1fa" }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
