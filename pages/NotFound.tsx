import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 128px)', // Adjust based on header/footer height
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="h1" sx={{ color: 'primary.main', fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" sx={{ mt: 2, mb: 4 }}>
        Page Not Found
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Dashboard
      </Button>
    </Box>
  );
}
