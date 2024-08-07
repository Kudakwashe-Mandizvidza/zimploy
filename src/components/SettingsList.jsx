import { CheckBox } from "@mui/icons-material";
import { Checkbox, Container, Divider, Paper, Switch, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const SettingsList = ({mode, setMode}) => {
  
  return (
    <Container sx={{ maxWidth:'600px', marginTop:'50px' }}>
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
          justifyContent:'space-between'
        }}
      >
        <Typography variant="h6">Enable Notification</Typography>
        <Checkbox>
            <CheckBox/>
        </Checkbox>
      </Paper>
      <Divider />
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
          justifyContent:'space-between'
        }}
      >
        <Typography variant="h6">Change Theme</Typography>
        <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}  inputProps={{'aria-label':'controlled'}} />
      </Paper>
      <Divider />
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
          
        }}
        component={Link} to='/about' 
      >
        <Typography  variant="h6"  >About</Typography>
      </Paper>
      <Divider />
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Typography variant="h6">Privacy Policy</Typography>
      </Paper>
      <Divider />
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Typography variant="h6">Share App</Typography>
      </Paper>
      <Divider />
      <Paper
        elevation={0}
        style={{
          padding: "16px",
          margin: "auto",
          marginLeft: "-15px",
          display: "flex",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Typography variant="h6">Rate App</Typography>
      </Paper>
      <Divider />
    </Container>
  );
};
