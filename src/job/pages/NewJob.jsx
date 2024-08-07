
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
import ImageUpload from '../../shared/ImageUpload'

const jobTypes = [
  {
    value: "full-time",
    label: "Full-Time",
  },
  {
    value: "part-time",
    label: "Part-Time",
  },
  {
    value: "internship",
    label: "Internship",
  },
  {
    value: "freelance",
    label: "Freelance",
  },
];

const salaryRanges = [
  {
    value:"select",
    label:"Select"
  },
  {
    value:"first",
    label:"$50-$100/month"
  },
  {
    value:"second",
    label:"$100-$300/month"
  },
  {
    value:"third",
    label:"$300-$500/month"
  },
  {
    value:"fourth",
    label:"$500-$700/month"
  },
  {
    value:"fifth",
    label:"$700-$900/month"
  },
  {
    value:"sixth",
    label:"$900-1000/month"
  },
  {
    value:"seventh",
    label:"To be discussed"
  },

]

const jobStates = [
  {
    value: "open",
    label: "Open",
  },
  {
    value: "interviewing",
    label: "Interviewing",
  },
  {
    value: "closed",
    label: "Closed",
  },
  {
    value: "filled",
    label: "Filled",
  },
  {
    value: "expired",
    label: "Expired",
  },
  {
    value: "onHold",
    label: "On Hold",
  },
  {
    value: "reopened",
    label: "Reopened",
  },
  {
    value: "offerExtended",
    label: "Offer Extended",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
  {
    value: "internalOnly",
    label: "Internal Only",
  },
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
  /**The value of the component */
  value: propTypes.any,
};

export const NewJob = () => {

  const handlePost = ()=>{
    //Job post logic
    console.log('Job post successful!');
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
              <InputLabel htmlFor="job-title-label">Job Title</InputLabel>
              <Input
                id="job-title"
                placeholder="Enter job Title"
                aria-describedby="job-title-text"
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
              <InputLabel htmlFor="job-location-label">Job Location</InputLabel>
              <Input
                id="job-location"
                placeholder="E.g Harare, Zimbabwe"
                aria-describedby="job-location-text"
              />
              <FormHelperText id="component-helper-text">
                Required
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="job-type"
              select
              label="Job Type"
              defaultValue="full-time"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
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
              id="job-states"
              select
              label="Job State"
              defaultValue="open"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
            >
              {jobStates.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="job-type">Work Environment</InputLabel>
            <RadioGroup name="work-environment-select" defaultValue="on-site">
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
              id="salary-range"
              select
              label="Salary Range"
              defaultValue="select"
              sx={{ width: "100%", marginBottom: "20px" }}
              variant="standard"
              helperText="Required"
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
              sx={{ width: "100%", paddingBottom: "10px" }}
              id="job-description"
              label="Job Description/ Requirements"
              multiline
              rows={9}
              variant="standard"
            />
          </Grid>
          <ImageUpload id='image'/>
        </Grid>
        <Button fullWidth variant="contained" color="primary" sx={{marginBottom:'10px'}} onClick={handlePost} >
          Post
        </Button>
      </Container>
    </>
  );
};
