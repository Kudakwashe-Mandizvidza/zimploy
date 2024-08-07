import React, { useState } from 'react';

import './navBar.css';

import { ThemeProvider } from '@emotion/react';
import ListIcon from '@mui/icons-material/List';
import {  Event, Gavel, Group, Home, Logout, Menu, Message, Notifications, Person, Policy,Search, Settings } from '@mui/icons-material';
import { AppBar, Badge,  Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, alpha, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Searcher = styled('div')(({ theme }) => ({
  position: 'relative',
  
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color:'white',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export const Navbar = () => {

  const theme = createTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = ()=>{
    setDrawerOpen(!drawerOpen);
  }

  return (
    <ThemeProvider theme={theme
    }>
      <AppBar color='inherit' sx={{backgroundColor:'#1976d2',  display:'flex', flexWrap:"wrap"}} >
        <Toolbar>
          <IconButton className='menu-button' onClick={toggleDrawer} edge='start' aria-label='Menu' color='inherit' style={{color:'white', width:'3rem', height:'3rem' }} >
            <Menu/>
          </IconButton>
          <Searcher>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searcher>
          <IconButton size='large' aria-label='show 5 new notifications'  sx={{marginLeft:'auto', color:'#fff'}} component={Link} to='/notifications'  >
              <Badge badgeContent={5} color='error' >
              <Notifications/>
              </Badge>
            </IconButton>
        
            <IconButton size='large' aria-label='show 17 new messages'  sx={{marginLeft:'0px', color:'#fff'}} component={Link} to='/messages' >
              <Badge badgeContent={17} color='error' >
              <Message/>
              </Badge>
              
            </IconButton>
            
              
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer} style={{color:"yellow"}}>
        <List>
          <ListItem button onClick={toggleDrawer} component={Link} to="/" >
            <ListItemIcon><Home color='primary' /></ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to='/:userId/profile' >
            <ListItemIcon ><Person color='primary' /></ListItemIcon>
            <ListItemText  primary="My profile"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to='/connections' >
          <ListItemIcon  ><Group color='primary'/></ListItemIcon>
            <ListItemText  primary="Connections"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to='/post/mypost' >
          <ListItemIcon  ><ListIcon color='primary'/></ListItemIcon>
            <ListItemText  primary="My Jobs"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to='/post/eventsList' >
          <ListItemIcon  ><Event color='primary'/></ListItemIcon>
            <ListItemText  primary="Events"/>
          </ListItem>
          <Divider/>
          <ListItem button onClick={toggleDrawer} >
            <ListItemIcon><Policy color='primary'/></ListItemIcon>
            <ListItemText primary="Privacy Policy"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer}  >
            <ListItemIcon><Gavel color='primary'/></ListItemIcon>
            <ListItemText primary="Terms of Service"/>
          </ListItem>
          <Divider/>
          <ListItem button onClick={toggleDrawer} component={Link} to='/settings' >
            <ListItemIcon><Settings color='primary'/></ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to='/auth' >
            <ListItemIcon><Logout color='primary'/></ListItemIcon>
            <ListItemText primary="Logout"/>
            
          </ListItem>
          <Typography variant='body1' sx={{padding:'5px', marginTop:'100%'}} >Zimploy, Copyright © 2024</Typography>
        </List>
      </Drawer>

    </ThemeProvider>
     
  )
}

