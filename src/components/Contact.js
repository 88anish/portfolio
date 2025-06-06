import React from 'react';
import { Typography, Container, Box, Paper, Grid, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Information
        </Typography>
        
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                Phone: +91 1234567890
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                Email: anishjain@example.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                Location: Bangalore, Karnataka, India
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LinkedInIcon sx={{ mr: 1 }} />
              <Link 
                href="https://linkedin.com/in/your-profile" 
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
