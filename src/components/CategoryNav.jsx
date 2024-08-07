import React, { useEffect, useState } from "react";

import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { JobItem } from "../job/JobItem";
import { useLocation } from "react-router-dom";
import { PartTime } from "./job categories/PartTime";
import { LoadingSkeleton } from "../shared/LoadingSkeleton";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`category-panel-${index}`}
      aria-labelledby={`category-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `category-tab${index}`,
    "arial-controls": `category-tabpanel-${index}`,
  };
}

export const CategoryNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const location = useLocation();

  useEffect(() => {
    const categoryTabMapping = {
      fullTime: 0,
      partTime: 1,
      internship: 2,
      freelance: 3,
    };

    const searchParams = new URLSearchParams(location.search);

    const tabParam = searchParams.get("tab");

    setActiveTab(categoryTabMapping[tabParam] || 0);
  }, [location.search]);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        marginTop: "56px",
        paddingBottom: "40px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          width: "100%",
          margin: "auto",
          marginTop: "47px",
          borderColor: "divider",
          position: "fixed",
          zIndex: 100,
          backgroundColor: "white",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="category-tabpanel"
          sx={{ justifyContent: "space-evenly" }}
        >
          <Tab label="Full-time" {...allyProps(0)} />
          <Tab label="Part-time" {...allyProps(1)} />
          <Tab label="Internship" {...allyProps(2)} />
          <Tab label="Freelance" {...allyProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={activeTab} index={0}>
        <div style={{ marginTop: "95px" }}>
          <JobItem />
          <JobItem />
          <JobItem />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        <div style={{ marginTop: "95px" }}>
          <PartTime />
          <PartTime />
          <PartTime />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        <div style={{ marginTop: "90px" }}>
          <LoadingSkeleton />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={3}>
        <div style={{ marginTop: "150px", marginLeft: "40%" }}>
          <CircularProgress />
        </div>
      </CustomTabPanel>
    </Box>
  );
};
