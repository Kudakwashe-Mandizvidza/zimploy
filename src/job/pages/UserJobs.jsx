import React from 'react'
import { SimpleAppBar } from '../../components/SimpleAppBar'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'

export const UserJobs = () => {
  return (
    <>
    <SimpleAppBar pageName="My jobs" />
    <Container>
      <Typography variant='h6' sx={{marginTop:'200px', textAlign:'center'}}>No job posts at the moment...</Typography>
    </Container>
    </>
   
  )
}
