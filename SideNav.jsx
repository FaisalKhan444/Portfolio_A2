import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const SideNav = ({ toggleSidebar, sidebarCollapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/' },
    { text: 'Creations', icon: <WorkIcon />, path: '/projects' },
    { text: 'Academics', icon: <SchoolIcon />, path: '/education' },
    { text: 'Reach Out', icon: <ContactMailIcon />, path: '/contact' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarCollapsed ? 80 : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarCollapsed ? 80 : drawerWidth,
          boxSizing: 'border-box',
          top: 64,
          height: 'calc(100% - 64px)',
          backgroundColor: '#f4faff',
          borderRight: '1px solid #d3e0ea',
        },
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleSidebar}>
          {sidebarCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(path)} sx={{ px: 2 }}>
              <ListItemIcon sx={{ color: '#0f4c75' }}>{icon}</ListItemIcon>
              {!sidebarCollapsed && (
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
