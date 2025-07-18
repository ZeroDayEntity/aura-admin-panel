import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
}));

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: string;
  change: string;
}

export default function StatCard({ icon, title, value, change }: StatCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <StyledPaper elevation={0}>
      <Box>
        <Typography color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography sx={{ color: isPositive ? 'success.main' : 'error.main', fontSize: '0.875rem' }}>
          {change}
        </Typography>
      </Box>
      <Box sx={{ color: 'primary.main' }}>
        {icon}
      </Box>
    </StyledPaper>
  );
}
