import React, { useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';
import './Projects.css';

const projects = [
  {
    title: 'Ping Pong',
    description: 'A simple yet fun game built using C++.',
    image: '/assets/pingpong.jpg',
  },
  {
    title: 'Notepad',
    description: 'A minimal notepad application for quick notes.',
    image: '/assets/notepad.jpeg',
  },
  {
    title: 'Chess',
    description: 'A fully functional chess game with AI.',
    image: '/assets/chess.jpeg',
  },
];

const Projects = () => {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <div className="projects-container">
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card" elevation={3}>
              <CardContent>
                <Box className="project-image">
                  <img src={project.image} alt={project.title} />
                </Box>
                <Typography variant="h5" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;