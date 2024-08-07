import { ArrowBack } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SimpleAppBar = ({pageName}) => {
    const navigate = useNavigate();

    const handleBack = ()=>{
        navigate(-1);
    };
  return (
    <AppBar  position='fixed' style={{display:'flex',  flexWrap:'wrap', top:-8}} >
        <Toolbar>
            <IconButton edge='start'  color='inherit' aria-label='Previous-page' onClick={handleBack} >
                <ArrowBack/>
            </IconButton>
            <Typography variant='h6' style={{flexGrow:1}} >{pageName}</Typography>
        </Toolbar>
    </AppBar>
  )
}
