import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const Rightbar = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        justifyItems: "right",
        marginTop: "60px",
        width: "400px",
        height: "500px",
        backgroundColor: "yellow",
      }}
    >
      <Typography>Rightbar</Typography>
    </Paper>
  );
};
