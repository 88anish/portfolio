import React from 'react';
import { Typography, Container, Paper, Box, Grid, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 6, color: '#ccd6f6' }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {/* MedEdge Health System */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4, height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CodeIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                MedEdge Health System
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ color: '#8892b0' }}>
              A comprehensive digital health platform connecting healthcare providers, laboratories, and patients with secure communication and streamlined workflows.
            </Typography>
            <ul style={{ paddingLeft: '20px', color: '#8892b0' }}>
              <li>Engineered a digital health system linking 50+ doctors, labs, and patients, improving workflow efficiency and communication.</li>
              <li>Integrated an OTP-based registration to bolster security, reducing unauthorized access by 20%.</li>
            </ul>
            <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'React.js', 'API'].map((tech) => (
                <Chip 
                  key={tech} 
                  label={tech} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(100, 255, 218, 0.1)', 
                    color: '#64ffda',
                    '& .MuiChip-label': { px: 1.5 }
                  }} 
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* AI Sentiment Analysis */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4, height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PsychologyIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                AI-Powered Sentiment Analysis System
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ color: '#8892b0' }}>
              A machine learning system for analyzing and classifying sentiment in customer feedback with high accuracy.
            </Typography>
            <ul style={{ paddingLeft: '20px', color: '#8892b0' }}>
              <li>Developed a sentiment analysis system using Python and TensorFlow to classify customer feedback from text data, achieving 85% accuracy on a labeled dataset.</li>
              <li>Deployed the model via a Flask-based RESTful API, enabling real-time sentiment predictions for integration with web applications.</li>
              <li>Optimized model performance by tuning hyperparameters and implementing dropout layers to prevent over-fitting, improving robustness on unseen data.</li>
            </ul>
            <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Python', 'TensorFlow', 'Flask', 'Machine Learning', 'NLP', 'REST API'].map((tech) => (
                <Chip 
                  key={tech} 
                  label={tech} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(100, 255, 218, 0.1)', 
                    color: '#64ffda',
                    '& .MuiChip-label': { px: 1.5 }
                  }} 
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Portfolio Website */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4, height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WebIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Portfolio Website
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ color: '#8892b0' }}>
              A modern, responsive portfolio website built with React and Material-UI, enhanced with AI assistance.
            </Typography>
            <ul style={{ paddingLeft: '20px', color: '#8892b0' }}>
              <li>Developed a responsive single-page application using React and Material-UI for a clean, modern interface</li>
              <li>Utilized Windsurf AI to accelerate development and implement complex UI components with minimal code</li>
              <li>Implemented responsive design principles to ensure optimal viewing across all device sizes</li>
              <li>Integrated smooth scrolling and interactive elements for enhanced user experience</li>
              <li>Deployed using modern web technologies for fast loading and optimal performance</li>
            </ul>
            <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['React', 'Material-UI', 'JavaScript', 'Windsurf AI', 'Responsive Design'].map((tech) => (
                <Chip 
                  key={tech} 
                  label={tech} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(100, 255, 218, 0.1)', 
                    color: '#64ffda',
                    '& .MuiChip-label': { px: 1.5 }
                  }} 
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
