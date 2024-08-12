import { Close } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { SimpleAppBar } from "../SimpleAppBar";

const JobExperienceForm = ({
  formState,
  index,
  inputHandler,
  handleChange,
  handleRemove,
}) => (
  <Box
    component="form"
    sx={{
      mt: 7,
      p: 3,
      border: "1px solid #ccc",
      borderRadius: 2,
      boxShadow: 3,
      mb: 2,
    }}
  >
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs>
        <Typography variant="h6">Add Job Experience</Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="close" onClick={() => handleRemove(index)}>
          <Close />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          value={formState.jobTitle}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formState.company}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Location"
          name="location"
          value={formState.location}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Country"
          name="country"
          value={formState.country}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="From Date"
          name="fromDate"
          value={formState.fromDate}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="To Date"
          name="toDate"
          value={formState.toDate}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formState.description}
          onChange={(e) => handleChange(e, index)}
          required
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  </Box>
);

const JobExperienceForms = () => {
  const [experienceForms, SetExperienceForms] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      country: "",
      fromDate: "",
      toDate: "",
      description: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedForms = [...experienceForms];
    updatedForms[index][name] = value;

    SetExperienceForms(updatedForms);
  };

  const handleAddForm = () => {
    SetExperienceForms([
      ...experienceForms,
      {
        jobTitle: "",
        company: "",
        location: "",
        country: "",
        fromDate: "",
        toDate: "",
        description: "",
      },
    ]);
  };

  const handleRemoveForm = (index) => {
    const updatedForms = experienceForms.filter((_, i) => i !== index);
    SetExperienceForms(updatedForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experienceForms);
  };

  return (
    <Container maxWidth="sm">
      <SimpleAppBar />
      {experienceForms.map((formState, index) => (
        <JobExperienceForm
          key={index}
          formState={formState}
          index={index}
          handleChange={handleChange}
          handleRemove={handleRemoveForm}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 6 }}
        onClick={handleAddForm}
      >
        + Add Job Experience
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default JobExperienceForms;
