import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const DashboardMenu = ({jobCount, MenuName}) => {
  const navigate = useNavigate();

  const route = '/dashboard'+ route;
  
  const handleClick=()=>{
    navigate({route});
  };

  return (
    <>
    <Paper elevation={0} sx={{width:'100%',margin:'auto',display:'flex',marginLeft:'-15px', padding:'16px', cursor:'pointer'}}  >
        
            <Typography variant='h6'>{MenuName} ({jobCount}) </Typography>
        
    </Paper>
    <Divider/>
    
    </>
  )
}
