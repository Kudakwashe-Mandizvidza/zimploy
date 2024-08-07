import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { SimpleAppBar } from "./SimpleAppBar";
import { Link, useNavigate } from "react-router-dom";

const employmentStatusOptions = [
  "Unemployed",
  "Employed",
  "Self-employed",
  "Contractor",
  "Student",
  "Not recruiting",
  "Actively recruiting",
];

export const ProfileForm = ({setProfile}) => {
  const [formData, setFormData] = useState({
    userName: "",
    professionTitle: "",
    bio: "",
    address: "",
    website: "",
    employmentStatus: "",
    keySkills: "",
    jobExperience: "",
    education: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //form submission login goes here
    e.preventDefault();
    setProfile(formData);
    navigate('/:userId/profile');
    
    
    
  };

  return (
    <Container maxWidth="md">
      <SimpleAppBar pageName="Edit profile" />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 3, marginTop: "60px", paddingBottom:'10px' }}
      >
        <Typography variant="h4" gutterBottom>
          Profile Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="userName"
              label="Username"
              variant="outlined"
              fullWidth
              value={formData.userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="professionTitle"
              label="Profession Title"
              variant="outlined"
              fullWidth
              value={formData.professionTitle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="bio"
              label="About/Bio"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.bio}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="website"
              label="Website"
              variant="outlined"
              fullWidth
              value={formData.website}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="employmentStatus"
              label="Employment Status"
              variant="outlined"
              fullWidth
              select
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              {employmentStatusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="keySkills"
              label="Key skills"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              value={formData.keySkills}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="jobExperience"
              label="Job Experience"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              value={formData.jobExperience}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component={Link} to='/:userId/profileForm/educationInput' > Add Education</Button>
          </Grid>
        </Grid>
        <Button type="submit"  variant="contained" color="primary" sx={{mt:3}}>Save</Button>
      </Box>
    </Container>
  );
};
