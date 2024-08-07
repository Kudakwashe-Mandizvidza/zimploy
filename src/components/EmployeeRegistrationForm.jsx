import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  Chip,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const employmentStatus = [
  {
    value: "employed",
    label: "Employed",
  },
  {
    value: "self-employed",
    label: "Self-employed",
  },
  {
    value: "unemployed",
    label: "Unemployed",
  },
  {
    value: "student",
    label: "Student",
  },
];

export const EmployeeRegistrationForm = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSkills, setAvailableSkills] = useState([
    "Writing and Editing",
    "Software development and IT",
    "Legal and Compliance",
    "Management and Leadership",
    "Marketing and sales",
    "Art and design",
    "Music and Performing Arts",
    "Education and Teaching",
    "Healthcare and Wellness",
    "Engineering and Construction",
    "Hospitality and Tourism",
    "Finance and Accounting",
    "Agriculture",
    "Other",
  ]);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setSkills([...skills, selectedSkill]);
      setSelectedSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container sx={{display:'flex', }} >
      <Paper elevation={0} sx={{marginBottom:'20px'}}  >
        <IconButton sx={{ color: "black" }} onClick={handleBackClick}>
          <ArrowBack />
        </IconButton>
      </Paper>
           
        <Grid
          container
          spacing={2}
     
          sx={{ display: "block", margin:'auto', justifyContent:'center', marginTop:'40px', marginLeft:'-60px' }}
        >
          <Grid item xs={12} sm={6}>
          <Typography
          
          variant="h4"
          gutterBottom
        >
          You're almost there!
        </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FormHelperText>Required</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="employment-status"
              select
              label="Employment Status"
              defaultValue="unemployed"
              helperText="Please select status"
              fullWidth
            >
              {employmentStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
         
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Select Skill"
              value={selectedSkill}
              onChange={handleSkillChange}
              variant="outlined"
            >
              {availableSkills.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {skill}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="outlined" color="primary" onClick={handleAddSkill}>
              Add Skill
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              multiline
              label="Key Skills"
              helperText="Skills will be displayed here"
              variant="outlined"
              onChange={() => {}}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Box display="flex" flexWrap="wrap">
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        onDelete={() => handleRemoveSkill(skill)}
                        style={{ marginRight: "4px" }}
                      />
                    ))}
                  </Box>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component={Link}
              to="/"
            >
              Done
            </Button>
          </Grid>
        </Grid>
      
    </Container>
  );
};
