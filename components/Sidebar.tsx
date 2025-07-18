import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import DiamondIcon from '@mui/icons-material/Diamond';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'User Management', icon: <PeopleIcon />, path: '/users' },
  { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  '&.active .MuiListItemButton-root': {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    borderRight: '3px solid #D4AF37',
    '& .MuiListItemIcon-root': {
      color: '#D4AF37',
    },
    '& .MuiListItemText-primary': {
        color: '#FFFFFF',
        fontWeight: 600,
    }
  },
});

interface SidebarProps {
  drawerWidth: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ drawerWidth, isOpen, onClose }: SidebarProps) {
  const drawerContent = (
    <div>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
        <DiamondIcon sx={{ color: 'primary.main', mr: 1, fontSize: '2rem' }}/>
        <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
          Aura
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <StyledNavLink to={item.path} key={item.text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="persistent"
        open={isOpen}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}