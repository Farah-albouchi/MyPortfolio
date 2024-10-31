'use client' 

import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '@/app/globals.css'


const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: 'homepart' },
  { text: 'About Me', href: 'about' },
  { text: 'Services', href: 'services' },
  { text: 'Portfolio', href: 'portfolio' },

];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" onClick={()=> {scrollToSection(item.href)}} sx={{ textAlign: 'center'  }}>
              <ListItemText color='white' primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ 
    backgroundImage: 'linear-gradient(to left, #dccfed, #cbb1ea, #ba94e6, #a976e0, #9856da, #8946cc, #7a36be, #6b24b0, #5c2498, #4d2280, #401f69, #331c52);', 
    color: 'white',
    boxShadow: 'none' 
  }}>
        <Toolbar  sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
           color='white'
            aria-label="open drawer"
            
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{color:'white'}} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } ,alignItems: 'center'  , justifyContent:'space-between'}}>
            {navItems.map((item) => (
              <Button  className='navbar-link font-bold' onClick={()=> {scrollToSection(item.href)}} key={item.text} component="a"  sx={{ color: 'white', textTransform: 'none',marginLeft:'20px' , fontWeight:600,
                fontSize:'16px',
                fontStyle:'normal'}} >
                {item.text}
              </Button>
            ))}
          </Box>
          <Button
            href="#contact"
            sx={{
              backgroundColor: 'white',
              marginLeft:'80px' ,
              color: '#331C52',
            //   borderRadius: '50px',
             textTransform :'none',
              padding: '8px 16px',
              '&:hover':{
                color:'#331C52',
              },
              width:'120px',
              height:'80' , 
              fontWeight:600,
              fontSize:'15px',
              fontStyle:'normal'
            }}
          >
            Let's chat
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.getBoundingClientRect().top + window.scrollY- 64;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
});
}
};