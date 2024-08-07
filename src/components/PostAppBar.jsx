import { Cancel } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PostAppBar = () => {
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate(-1);
  };
  return (
    <AppBar color="primary" >
      <Toolbar>
        <IconButton sx={{ color: "white" }} onClick={handleCancelButton}>
          <Cancel />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
