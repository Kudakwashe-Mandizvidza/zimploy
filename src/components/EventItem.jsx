import React from 'react'

import { Button, Card, CardActions, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material'

export const EventItem = () => {
  return (
    <>
      
      <Card
        sx={{
          margin: "auto",
          maxWidth: '400px',
          maxHeight: '600px',
          marginTop: "60px",
        }}
      >
        <CardMedia
          component="img"
          src="/assets/cover2.jpg"
          alt="cover"
          sx={{ height: "140px", width: "100%" }}
        />
        <CardContent>
          <Typography variant="body1" fontWeight={500}>
            Deltap 60th Year Anniversary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            FRI, MAR 29 21:20
          </Typography>

          <Typography variant="body1">On-site</Typography>
          <Typography variant="body2" color="text.secondary">
            23 North Robless Avenue
          </Typography>
          <Typography variant='body2'>
            <Link sx={{cursor:'pointer'}} >https://deltapcelebration</Link>
          </Typography>
        </CardContent>
        <Divider sx={{width:'90%', margin:'auto'}} />
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            Interested
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
