import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Gold
    },
    secondary: {
      main: '#B2B2B2', // Light Grey
    },
    background: {
      default: '#1A1A2E', // Dark Charcoal/Blue
      paper: '#23233D', // Slightly lighter for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h5: {
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h6: {
        fontWeight: 600,
        color: '#FFFFFF',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove MUI's default gradient
          border: '1px solid rgba(212, 175, 55, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
        },
        containedPrimary: {
            color: '#1A1A2E',
            '&:hover': {
                backgroundColor: '#EACD6E',
            }
        }
      },
    },
  },
});

export { darkTheme };