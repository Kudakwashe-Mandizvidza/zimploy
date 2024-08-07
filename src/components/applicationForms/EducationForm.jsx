import { Close } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { SimpleAppBar } from "../SimpleAppBar";

const EducationForms = ({ formData, index, handleChange, handleRemove }) => (
  <Box
    component="form"
    sx={{ mt: 3, p: 3, border: "1px solid #ccc", boxShadow: 3, mb: 2 }}
  >
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
    >
      <Grid item xs>
        <Typography variant="h6">Add Education</Typography>
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
          label="School/College name"
          name="school"
          value={FormData.school}
          onChange={(e) => handleChange(e, index)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Field of Study"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={(e) => handleChange(e, index)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Degree"
          name="degree"
          value={formData.degree}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Place"
          name="place"
          value={formData.place}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Country"
          name="country"
          value={formData.country}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="From Year"
          name="fromYear"
          value={formData.fromYear}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label=" To year"
          name="toYear"
          value={formData.toYear}
          onChange={(e) => handleChange(e, index)}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          onChange={(e) => handleChange(e, index)}
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  </Box>
);

export const EducationForm = () => {
  const [educationForms, setEducationForms] = useState([
    {
      school: "",
      fieldOfStudy: "",
      degree: "",
      place: "",
      country: "",
      fromYear: "",
      toYear: "",
      description: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedForms = [...educationForms];
    updatedForms[index][name] = value;

    setEducationForms(updatedForms);
  };

  const handleAddForm = () => {
    setEducationForms([
      ...educationForms,
      {
        school: "",
        fieldOfStudy: "",
        degree: "",
        place: "",
        country: "",
        fromYear: "",
        toYear: "",
        description: "",
      },
    ]);
  };

  const handleRemoveForm = (index) => {
    const updatedForms = educationForms.filter((_, i) => i !== index);
    setEducationForms(updatedForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //handle form submission logic here
    console.log(educationForms);
  };

  return (
    <Container maxWidth="sm">
      <SimpleAppBar />
      {educationForms.map((formData, index) => (
        <EducationForms
          key={index}
          formData={formData}
          index={index}
          handleChange={handleChange}
          handleRemove={handleRemoveForm}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handleAddForm}
      >
        + add education
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};
