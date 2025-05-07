import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        px: 3,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[100],
        position: "fixed",
        bottom: 0,
        left: 0,
        borderTop: "1px solid #ddd",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Faisal Khan.
      </Typography>
    </Box>
  );
};

export default Footer;
