import React, { useRef, useState } from "react";
import { PostAppBar } from "./PostAppBar";
import propTypes from "prop-types";
import { Container } from "@mui/system";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  useRadioGroup,
} from "@mui/material";
import styled from "@emotion/styled";
import { Edit } from "@mui/icons-material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const CoverPhoto = styled("div")({
  width: "100%",
  height: "150px",
  marginTop: "45px",
  position: "relative",
  overflow: "hidden",
  objectFit:'cover'
});

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

export const EventPost = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [coverImage, SetCoverImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    SetCoverImage(file);
  };

  const handleCoverChangeClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <PostAppBar />
      <Container sx={{ maxWidth:'600px', marginTop: "70px" }}>
        <div style={{ marginBottom: "20px" }}>
          {!coverImage &&(
            <CoverPhoto>
            <img src="/assets/cover.jpg" alt="cover-default" />
          </CoverPhoto>
          )}
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ display: "none" }}>
                <input
                  id="cover-input"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleCoverImageChange}
                  accept="image/*"
                />
              </FormControl>
            </Grid>
            {coverImage && (
              <Grid item xs={12}>
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover"
                  style={{ maxWidth: "100%", width:'100%' ,objectFit:'cover', maxHeight: "150px" }}
                />
              </Grid>
            )}
          </Grid>

          <IconButton
            sx={{
              marginTop: "-45px",
              display: "flex",
              color: "#fff",
              marginLeft:'90%'
            }}
            onClick={handleCoverChangeClick}
          >
            <Edit />
          </IconButton>
        </div>
        <div>
          <FormControl
            variant="standard"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <InputLabel htmlFor="component-helper">Event Name</InputLabel>
            <Input
              id="event-name"
              placeholder="Enter event name"
              aria-describedby="event"
            />
            <FormHelperText id="component-helper-text">Required</FormHelperText>
          </FormControl>
          <FormControl
            variant="standard"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Set date and time"
                value={selectedDateTime}
                onChange={handleDateTimeChange}
                TextFieldComponent={<TextField variant="standard" />}
              />
            </LocalizationProvider>
            <FormHelperText id="component-helper-text">Required</FormHelperText>
          </FormControl>
          <FormControl
            variant="standard"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <InputLabel htmlFor="event-link">Broadcast link</InputLabel>
            <Input
              id="event-link"
              placeholder="Enter link (optional)"
              aria-describedby="event"
            />
          </FormControl>
          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="event-description"
            label="Event Description"
            multiline
            rows={5}
            variant="standard"
          />

          <InputLabel htmlFor="event-type">Event type</InputLabel>
          <RadioGroup name="event-type-select" defaultValue="online">
            <MyFormControlLabel
              value="online"
              label="Online"
              control={<Radio />}
            />
            <MyFormControlLabel
              value="on-site"
              label="On-site"
              control={<Radio />}
            />
          </RadioGroup>
        </div>
        
        <Button fullWidth variant="contained" color="primary">POST</Button>
      </Container>
    </>
  );
};
