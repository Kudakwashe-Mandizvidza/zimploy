import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { PostAppBar } from "../PostAppBar";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.resume) {
      console.log("Upload resume");
    }
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <PostAppBar />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 3, marginTop: "60px" }}
      >
        <Typography variant="h4" gutterBottom>
          Application Form
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="education-label">Education</InputLabel>
          <Select
            labelId="education-label"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <MenuItem value="High School">High School</MenuItem>
            <MenuItem value="Associate Degree">Associate Degree</MenuItem>
            <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
            <MenuItem value="Master's Degree">Master's Degree</MenuItem>
            <MenuItem value="PhD">PhD</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Resume
          <input type="file" hidden onChange={handleFileChange} required />
        </Button>
        {formData.resume && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            {formData.resume.name}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, display: "block" }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ApplicationForm;
