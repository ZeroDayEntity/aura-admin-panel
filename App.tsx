import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Users from './pages/Users.tsx';
import NotFound from './pages/NotFound.tsx';

const DRAWER_WIDTH = 260;

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar
        drawerWidth={DRAWER_WIDTH}
        isOpen={isSidebarOpen}
        onClose={handleSidebarToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          transition: (theme) => theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: { sm: `-${DRAWER_WIDTH}px` },
          ...(isSidebarOpen && {
            transition: (theme) => theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Header onMenuClick={handleSidebarToggle} />
        <Box sx={{ p: 3, mt: '64px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            {/* Add other routes here for products, analytics, etc. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
