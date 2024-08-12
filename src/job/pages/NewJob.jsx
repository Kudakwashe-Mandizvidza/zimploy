import { PostAppBar } from "../../components/PostAppBar";
import { Container } from "@mui/system";
import propTypes from "prop-types";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  useRadioGroup,
} from "@mui/material";
import styled from "@emotion/styled";
import ImageUpload from "../../shared/ImageUpload";
import axios from "axios";
import { useState } from "react";

const jobTypes = [
  { value: "full-time", label: "Full-Time" },
  { value: "part-time", label: "Part-Time" },
  { value: "internship", label: "Internship" },
  { value: "freelance", label: "Freelance" },
];

const salaryRanges = [
  { value: "select", label: "Select" },
  { value: "first", label: "$50-$100/month" },
  { value: "second", label: "$100-$300/month" },
  { value: "third", label: "$300-$500/month" },
  { value: "fourth", label: "$500-$700/month" },
  { value: "fifth", label: "$700-$900/month" },
  { value: "sixth", label: "$900-1000/month" },
  { value: "seventh", label: "To be discussed" },
];

const jobStates = [
  { value: "open", label: "Open" },
  { value: "interviewing", label: "Interviewing" },
  { value: "closed", label: "Closed" },
  { value: "filled", label: "Filled" },
  { value: "expired", label: "Expired" },
  { value: "onHold", label: "On Hold" },
  { value: "reopened", label: "Reopened" },
  { value: "offerExtended", label: "Offer Extended" },
  { value: "cancelled", label: "Cancelled" },
  { value: "internalOnly", label: "Internal Only" },
];

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiformControlLabel-label": checked && {
    color: theme.palette,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: propTypes.any,
};

export const NewJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "full-time",
    state: "open",
    environment: "on-site",
    salary: "select",
    description: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobs",
        formData
      );
      console.log("Job post successful!", response.data);
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <>
      <PostAppBar />
      <Container sx={{ width: "100%", marginTop: "70px" }}>
        <Grid
          container
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}
        >
          <Grid item xs={12}>
            <FormControl
              variant="standard"
              sx={{ width: "100%", marginBottom: "20px" }}
            >
              <InputLabel htmlFor="title">Job Title</InputLabel>
              <Input
                id="title"
                placeholder="Enter job Title"
                aria-describedby="job-title-text"
                value={formData.title}
                onChange={handleChange}
              />
              <FormHelperText id="component-helper-text">
                Required
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              variant="standard"
              sx={{ width: "100%", marginBottom: "20px" }}
            >
              <InputLabel htmlFor="location">Job Location</InputLabel>
              <Input
                id="location"
                placeholder="E.g Harare, Zimbabwe"
                aria-describedby="job-location-text"
                value={formData.location}
                onChange={handleChange}
              />
              <FormHelperText id="component-helper-text">
                Required
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="type"
              select
              label="Job Type"
              defaultValue="full-time"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
              value={formData.type}
              onChange={handleChange}
            >
              {jobTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="state"
              select
              label="Job State"
              defaultValue="open"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
              value={formData.state}
              onChange={handleChange}
            >
              {jobStates.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="environment">Work Environment</InputLabel>
            <RadioGroup
              id="environment"
              name="work-environment-select"
              value={formData.environment}
              onChange={handleChange}
              defaultValue="on-site"
            >
              <MyFormControlLabel
                value="onsite"
                label="On-site"
                control={<Radio />}
              />
              <MyFormControlLabel
                value="remote"
                label="Remote"
                control={<Radio />}
              />
              <MyFormControlLabel
                value="hybrid"
                label="Hybrid"
                control={<Radio />}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="salary"
              select
              label="Salary Range"
              defaultValue="select"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
              value={formData.salary}
              onChange={handleChange}
            >
              {salaryRanges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              sx={{ width: "100%", paddingBottom: "10px" }}
              label="Job Description/ Requirements"
              multiline
              rows={9}
              variant="standard"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <ImageUpload id="image" />
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginBottom: "10px" }}
          onClick={handlePost}
        >
          Post
        </Button>
      </Container>
    </>
  );
};
