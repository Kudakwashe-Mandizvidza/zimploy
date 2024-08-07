import { Avatar, Card, Skeleton } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const LoadingSkeleton = () => {
  return (
    <Container>
        <Card elevation={1} sx={{padding:'10px'}} >
        <div style={{display:'flex', marginBottom:'10px', justifyContent:'space-between'}} >
        <Skeleton variant='circular'>
            <Avatar/>
        </Skeleton>
        <Skeleton variant='text' sx={{fontSize:'2rem', width:'260px', }}/>
        </div>
        <Skeleton variant='rectangular' sx={{marginBottom:'10px'}} width={300} height={100}/>
        <Skeleton variant='rounded' width={300} height={150}/>
        <Skeleton variant='text'/>
        <Skeleton variant='text' width={290} />
        </Card>
        


    </Container>
  )
}
