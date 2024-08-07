import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const Sidebar = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        marginLeft: "0px",
        left: 0,
        marginTop: "60px",
        width: "500px",
        height: "500px",
        backgroundColor: "red",
      }}
    >
      <Typography>Sidebar</Typography>
    </Paper>
  );
};
