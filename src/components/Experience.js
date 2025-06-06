import React from 'react';
import { Typography, Container, Box, Paper, Divider, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 8, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 6, color: '#ccd6f6' }}>
        Work Experience
      </Typography>
      
      {/* PwC Experience */}
      <Paper elevation={3} sx={{ 
        p: 4, 
        mb: 4, 
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
          <WorkIcon color="primary" sx={{ mr: 1, color: '#64ffda' }} />
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#ccd6f6' }}>
            PwC
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ color: '#8892b0', mb: 1 }}>
          Associate
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#64ffda', mb: 3, fontStyle: 'italic' }}>
          September 2024 - Present
        </Typography>
        
        <Divider sx={{ bgcolor: 'rgba(100, 255, 218, 0.2)', my: 2 }} />
        
        <Box component="ul" sx={{ pl: 2, color: '#8892b0', '& li': { mb: 1.5 } }}>
          <li>
            <Typography variant="body1">
              Designed and developed an advanced AI-powered Retrieval-Augmented Generation (RAG) chatbot, seamlessly integrated with OpenAI, to enable efficient database searches across multiple tables. The chatbot significantly improved query accuracy and provided AI-enhanced responses, streamlining data retrieval processes for business insights.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Contributed to the IT Strategy Roadmap for one of India's top NBFCs, aligning technology initiatives with business objectives across multiple units such as lending, insurance, and asset management. Worked closely with stakeholders across business arms to analyze current systems, identify technology gaps, and propose scalable digital solutions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Conducted data-driven analysis using Excel and developed high-impact executive presentations in PowerPoint to support CXO-level decision-making. Gained valuable exposure to enterprise architecture, digital transformation, and large-scale IT ecosystems, enhancing both technical problem-solving and business acumen.
            </Typography>
          </li>
        </Box>
        
        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['AI/ML', 'OpenAI', 'RAG', 'Data Analysis', 'Enterprise Architecture', 'Digital Transformation', 'Stakeholder Management', 'Excel', 'PowerPoint'].map((skill) => (
            <Chip 
              key={skill} 
              label={skill} 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(100, 255, 218, 0.1)', 
                color: '#64ffda',
                '& .MuiChip-label': { px: 1.5 },
                fontSize: '0.75rem'
              }} 
            />
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Experience;
