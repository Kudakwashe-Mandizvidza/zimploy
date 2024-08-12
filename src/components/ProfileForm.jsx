import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { SimpleAppBar } from "./SimpleAppBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../shared/validators";

const employmentStatusOptions = [
  "Unemployed",
  "Employed",
  "Self-employed",
  "Contractor",
  "Student",
  "Not recruiting",
  "Actively recruiting",
];

export const ProfileForm = ({ setProfile }) => {
  const [formState, inputHandler] = useForm({
    userName: {
      value: "",
      isValid: false,
    },
    professionTitle: {
      value: "",
      isValid: false,
    },
    bio: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
    website: {
      value: "",
      isValid: false,
    },
    employmentStatus: {
      value: "",
      isValid: false,
    },
    keySkills: {
      value: [],
      isValid: false,
    },
    jobExperience: {
      value: [],
      isValid: false,
    },
    education: {
      value: [],
      isValid: false,
    },
  });

  /*({
    userName: "",
    professionTitle: "",
    bio: "",
    address: "",
    website: "",
    employmentStatus: "",
    keySkills: "",
    jobExperience: "",
    education: "",
  });*/

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    inputHandler((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const applicationSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    setProfile(formState);
    navigate("/:userId/profile");
  };

  return (
    <Container maxWidth="md">
      <SimpleAppBar pageName="Edit profile" />
      <Box
        component="form"
        onSubmit={applicationSubmitHandler}
        sx={{ mt: 3, marginTop: "60px", paddingBottom: "10px" }}
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
              value={formState.userName}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid Name"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="professionTitle"
              label="Profession Title"
              variant="outlined"
              fullWidth
              value={formState.professionTitle}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid title"
              validators={[VALIDATOR_REQUIRE()]}
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
              value={formState.bio}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid bio"
              validators={[VALIDATOR_MINLENGTH(5)]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={formState.address}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid address"
              validators={[VALIDATOR_REQUIRE()]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="website"
              label="Website"
              variant="outlined"
              fullWidth
              value={formState.website}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid website"
              validators={[VALIDATOR_MINLENGTH(9)]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="employmentStatus"
              label="Employment Status"
              variant="outlined"
              fullWidth
              select
              value={formState.employmentStatus}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter a valid status"
              validators={[VALIDATOR_REQUIRE()]}
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
              value={formState.keySkills}
              onChange={handleChange}
              onInput={inputHandler}
              errorText="Please enter valid skills"
              validators={[VALIDATOR_REQUIRE()]}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          fullWidth
          //disabled={!formState.isValid}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};
