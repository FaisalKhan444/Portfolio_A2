import React from "react";
import { Avatar, Box, Container } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Container className="bg-home" maxWidth={false}>
      <Box className="centered-box">
        <Avatar
          src="assets/FaisalKhan1.png"
          className="prf-pic"
          alt="Faisal Khan"
        />
        <Box className="text-container">
          <h1 className="name">Faisal Khan</h1>
          <h2 className="role">BS Artificial Intelligence | Developer</h2>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
