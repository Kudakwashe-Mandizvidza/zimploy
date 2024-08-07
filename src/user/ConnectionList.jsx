import React from 'react'
import { SimpleAppBar } from '../components/SimpleAppBar'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'

export const ConnectionList = () => {
  return (
    <>
    <SimpleAppBar pageName='Connections'/>
    <Container>
        <Typography variant='h6' sx={{textAlign:'center', marginTop:'200px'}} >No connections at the moment...</Typography>
    </Container>
    </>
  )
}
