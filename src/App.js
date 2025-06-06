import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a3e1',
    },
    secondary: {
      main: '#00f0ff',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    h1: {
      fontSize: 'clamp(40px, 8vw, 80px)',
      fontWeight: 600,
      margin: '0px 0px 20px',
      color: '#e6f1ff',
    },
    h2: {
      fontSize: 'clamp(24px, 5vw, 32px)',
      fontWeight: 600,
      margin: '10px 0px 0px',
      color: '#ccd6f6',
    },
    h3: {
      fontSize: 'clamp(20px, 4vw, 24px)',
      fontWeight: 600,
      color: '#ccd6f6',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#ccd6f6',
    },
    body1: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: '#8892b0',
    },
    button: {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '12px 20px',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 20px -10px rgba(2, 12, 27, 0.7)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: '4px',
          boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
