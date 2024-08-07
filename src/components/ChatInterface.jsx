import { ArrowBack, MoreVert, VideoCall } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ChatWindow } from './ChatWindow'
import { Link, useNavigate } from 'react-router-dom'

export const ChatInterface = () => {

    const [menuAnchor, setMenuAnchor] = useState(null);
     const navigate = useNavigate();

    const handleMenuOpen = (event)=>{
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = ()=>{
        setMenuAnchor(null);
    };
    const handleBack = ()=>{
        navigate(-1);
    };

  return (
    <>
    
    <AppBar position='static'sx={{width:'100%'}} >
        <Toolbar sx={{justifyContent:'space-between'}} >
            <div style={{display:'flex'}} >
            <IconButton edge='start'  color='inherit' aria-label='Previous-page' onClick={handleBack} >
                <ArrowBack/>
            </IconButton>
            <Avatar sx={{cursor:'pointer'}} alt='user avatar' src='/assets/afro.jpg' component={Link} to='/:userId/profile' />
            <Typography variant='h6' color='inherit' sx={{marginLeft:'8px'}} >Hydrogen Bond</Typography>
            </div>
            <div>
            <IconButton color='inherit' aria-label='video call'>
                <VideoCall/>
            </IconButton>
           
            <IconButton color='inherit' aria-label='more options' onClick={handleMenuOpen} >
                <MoreVert/>
            </IconButton>
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} >Report</MenuItem>
                <MenuItem onClick={handleMenuClose}>Block</MenuItem>
                <MenuItem onClick={handleMenuClose}>Clear chat</MenuItem>
            </Menu>
            </div>
           
           
        </Toolbar>
    </AppBar>
    <ChatWindow/>
    </>
  )
}
