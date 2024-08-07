import { Category, Dashboard, Home, PostAdd } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  const [value, setValue] = useState("Home");

  const handleChange = (event, newvalue) => {
    setValue(newvalue);
  };

  return (
    <BottomNavigation
    showLabels
      sx={{
        width: "100%",
        backgroundColor: "#1976d2",
        bottom: "0",
        position: "fixed",
        zIndex: 1000,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        sx={{ color: "#fff" }}
        label="Home"
        value="home"
        component={Link}
        to="/"
        icon={<Home />}
      />
      <BottomNavigationAction
        label="Category"
        value="category"
        sx={{ color: "#fff" }}
        component={Link}
        to="/category"
        icon={<Category />}
      />
      <BottomNavigationAction
        label="Post"
        value="post"
        sx={{ color: "#fff" }}
        component={Link}
        to="/post"
        icon={<PostAdd />}
      />
      <BottomNavigationAction
        label="Dash Board"
        value="dashboard"
        sx={{ color: "#fff" }}
        component={Link}
        to="/dashboard"
        icon={<Dashboard />}
      />
    </BottomNavigation>
  );
};
