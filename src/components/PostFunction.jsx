import { Event, PermMedia, Poll, Work } from "@mui/icons-material";
import {Divider, IconButton,Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const PostFunction = () => {
  return (
    <Container sx={{ marginTop: "70px", maxWidth:'700px' }}>
      <Paper elevation={6} sx={{padding:'9px'}} >
        <div style={{ display: "flex", marginLeft: "5px", paddingBottom:'5px' }}>
          <img src="/assets/folio.png" alt="folio-avatar" style={{ marginRight: "5px",marginTop:'10px', border:'50%', width:'60px', height:"60px", objectFit:'cover' }} />
          <Typography variant="h6" sx={{marginTop:'12px'}} >Have a job, event, or insight to share?</Typography>
        </div>
        <Divider/>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton type="button" component={Link} to="/post/media">
            <PermMedia sx={{ color: "red" }} />
            <span style={{ fontSize: "18px", paddingLeft:'3px' }}>Media</span>
          </IconButton>

          <IconButton component={Link} to="/post/poll">
            <Poll sx={{ color: "darkmagenta" }} />
            <span style={{ fontSize: "18px", paddingLeft:'3px' }}>Poll</span>
          </IconButton>
          <IconButton component={Link} to="/post/newjob">
            <Work sx={{ color: "green" }} />
            <span style={{ fontSize: "18px", paddingLeft:'3px' }}>Job</span>
          </IconButton>
          <IconButton component={Link} to="/post/newevent">
            <Event sx={{ color: "orangered" }} />
            <span style={{ fontSize: "18px", paddingLeft:'3px' }}>Event</span>
          </IconButton>
        </Toolbar>
      </Paper>
    </Container>
  );
};
