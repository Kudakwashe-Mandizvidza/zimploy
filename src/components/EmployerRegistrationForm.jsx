import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const industry = [
  {
    value:'none',
    label:'Please select'
  },
  {
    value: "agriculture",
    label: "Agriculture",
  },
  {
    value: "manufacturing",
    label: "Manufacturing",
  },
  {
    value: "education",
    label: "Education and Training",
  },
  {
    value: "construction",
    label: "Construction and Infrastructure",
  },
  {
    value: "transportation",
    label: "Transportation and Logistics",
  },
  {
    value: "technology",
    label: "Information Technology and Telecommunication",
  },
  {
    value: "finance",
    label: "Financial Services ",
  },
  {
    value: "health",
    label: "Healthcare and Pharmaceuticals",
  },
  {
    value: "consumer goods",
    label: "Retail and Consumer Goods",
  },
  {
    value: "entertainment",
    label: "Entertainment and Media",
  },
  {
    value: "tourism",
    label: "Tourism and Hospitality",
  },
];

export const EmployerRegistrationForm = () => {
  const navigate = useNavigate();

  const handleBackClick = ()=>{
    navigate(-1);
  };

  return (
    <Container>
      <Paper elevation={0} sx={{width:'100%'}} >
        <IconButton sx={{color:'black'}} onClick={handleBackClick} >
          <ArrowBack/>
        </IconButton>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          width: "400px",
          padding: "20px",
          marginTop: "40px",
          marginLeft:'-12px'
        }}
      >
        <Typography variant="h4">You're almost there!</Typography>
        <FormControl>
          <TextField
            sx={{ width: "350px", marginTop: "20px" }}
            id="company-name"
            label="Company Name"
            helperText="Required"
            
          />
        </FormControl>
        <FormControl>
          <TextField
            sx={{ width: "350px", marginTop: "10px" }}
            id="company-address"
            label="Address"
            helperText="Required"
            placeholder="12 Newell Road, Harare, Zimbabwe"
          />
        </FormControl>
        <FormControl>
          <TextField
            sx={{ width: "350px", marginTop: "10px" }}
            id="company-website"
            label="Website"
            
          />
        </FormControl>
        <FormControl sx={{ width: "350px", marginTop: "20px" }}>
          <TextField
            id="industry"
            select
            label="Industry"
            defaultValue="none"
            helperText="Select Industry"
          >
            {industry.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Button variant="contained" color="primary" sx={{marginTop:'30px', marginLeft:'-5px', width:'90%', }} component={Link} to="/" >Done</Button>
      </Paper>
    </Container>
  );
};
