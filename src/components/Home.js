import React from 'react';
import { Typography, Container, Box, Button, Link, Grid, AppBar, Toolbar, Paper, Divider, Chip, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 28px',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0.05em',
  borderRadius: '4px',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 20px -10px rgba(2, 12, 27, 0.7)',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
}));

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton 
            href="https://www.linkedin.com/in/88anish/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              color: 'white',
              '&:hover': {
                color: '#64ffda',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
              mr: 1
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
          <NavLink component={RouterLink} to="/experience">
            Experience
          </NavLink>
          <NavLink component={RouterLink} to="/projects">
            Projects
          </NavLink>
          <Button 
            variant="outlined" 
            color="primary" 
            href="https://drive.google.com/file/d/1Mi9Kc6Q2BlTVJFVkfmrRIAF0JkeusZOW/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 2 }}
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: { xs: 15, md: 25 }, mb: 10 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 15 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            Hi, my name is
          </Typography>
          <Typography variant="h1" sx={{ mb: 2, color: '#e6f1ff' }}>
            Anish Jain.
          </Typography>
          <Typography variant="h2" sx={{ mb: 3, color: '#8892b0' }}>
            I build things for the web.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '540px', mb: 4, color: '#8892b0' }}>
            I'm a backend engineer specializing in building (and occasionally designing) exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products with cutting-edge technologies.
          </Typography>
          
          <StyledButton 
            variant="contained" 
            color="primary"
            href="https://drive.google.com/file/d/1Mi9Kc6Q2BlTVJFVkfmrRIAF0JkeusZOW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 2, mb: 2 }}
          >
            Check out my resume!
          </StyledButton>
        </Box>

        {/* About Me Section */}
        <Box sx={{ mb: 15 }}>
          <Typography variant="h3" sx={{ mb: 6, color: '#ccd6f6' }}>
            About Me
          </Typography>
          <Paper elevation={3} sx={{ 
            p: 4, 
            mb: 8, 
            bgcolor: 'rgba(30, 30, 50, 0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 30px -10px rgba(100, 255, 218, 0.2)'
            }
          }}>
            <Typography variant="body1" sx={{ mb: 3, color: '#e6f1ff', lineHeight: 1.8 }}>
              I'm Anish Jain, a Software Engineer with 1 year of industry experience at PwC and a B.Tech in Computer Science from NIT Silchar.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#e6f1ff', lineHeight: 1.8 }}>
              With a strong interest in Artificial Intelligence and its real-world applications, I actively explore emerging AI tools and development frameworks to stay at the forefront of innovation.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#e6f1ff', lineHeight: 1.8 }}>
              I've developed this portfolio website using Windsurf, reflecting my commitment to hands-on learning and building impactful solutions.
            </Typography>
            <Typography variant="body1" sx={{ color: '#e6f1ff', lineHeight: 1.8 }}>
              I'm currently seeking opportunities where I can contribute to cutting-edge products, deepen my expertise in AI & software engineering, and collaborate with talented teams.
            </Typography>
          </Paper>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 15 }}>
          <Typography variant="h3" sx={{ mb: 6, color: '#ccd6f6' }}>
            Skills & Technologies
          </Typography>
          <Paper elevation={3} sx={{ 
            p: 4, 
            mb: 8, 
            bgcolor: 'rgba(30, 30, 50, 0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 30px -10px rgba(100, 255, 218, 0.2)'
            }
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CodeIcon color="primary" sx={{ mr: 1, color: '#64ffda' }} />
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#ccd6f6' }}>
              Technical Proficiencies
            </Typography>
          </Box>
          
          <Divider sx={{ bgcolor: 'rgba(100, 255, 218, 0.2)', my: 3 }} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2 }}>Programming Languages</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['Java', 'C#', 'C++', 'Python', 'Golang'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2, mt: 4 }}>Frontend</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['ReactJS', 'Node.js', 'REST APIs'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2, mt: 4 }}>Backend & Cloud</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['Java (Spring Boot)', 'Kafka', 'Redis', 'Microservices', 'Azure', 'CI/CD', 'Docker (basic)'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2 }}>Databases</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['MySQL', 'MongoDB', 'NoSQL', 'SQL'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2, mt: 4 }}>CS Fundamentals</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['Data Structures and Algorithms', 'Object-Oriented Programming', 'System Design (basic)'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2, mt: 4 }}>Tools & Platforms</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['VS Code', 'Git', 'Linux', 'Postman', 'MATLAB', 'Windows'].map((skill) => (
                  <Chip 
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      '& .MuiChip-label': { px: 1.5 },
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Contact Section */}
      <Box sx={{ mb: 15 }}>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#ccd6f6' }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', textAlign: 'center', mb: 4 }}>
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
          <StyledButton 
            variant="outlined" 
            color="primary"
            href="mailto:88anish.jain@gmail.com"
            sx={{ mr: 2, mb: 2 }}
          >
            88anish.jain@gmail.com
          </StyledButton>
          <StyledButton 
            variant="outlined" 
            color="primary"
            href="tel:+919387358129"
            sx={{ mr: 2, mb: 2 }}
          >
            +91 9387358129
          </StyledButton>
          <StyledButton 
            variant="outlined" 
            color="primary"
            href="https://www.linkedin.com/in/88anish/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 2 }}
          >
            LinkedIn
          </StyledButton>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Built with React & Material-UI
        </Typography>
      </Box>
      </Container>
    </>
  );
};

export default Home;
