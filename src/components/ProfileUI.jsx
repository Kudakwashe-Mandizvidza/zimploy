import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Container, styled } from "@mui/system";
import { CameraAlt, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CoverPhoto = styled("div")({
  width: "100%",
  height: "150px",
  marginTop: "45px",
  position: "relative",
  overflow: "hidden",
});

const ProfilePhoto = styled(Avatar)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%)",
  width: "100px",
  top: 140,
  objectFit: "cover",
  height: "100px",
  border: `3px solid white`,
}));

const ProfileDetails = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

export const ProfileUI = ({ profile = {} }) => {
  const [coverImage, SetCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const {
    userName,
    professionTitle,
    bio,
    address,
    website,
    employmentStatus,
    keySkills,
    jobExperience,
    education,
  } = profile;
  const fileInputRef = useRef();
  const proFileInputRef = useRef();

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    SetCoverImage(file);
  };

  const handleProfileImageChange = (e) => {
    const fileP = e.target.files[0];
    setProfileImage(fileP);
  };

  const handleCoverImageChangeClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileImageChangeClick = () => {
    proFileInputRef.current.click();
  };

  return (
    <Container sx={{ maxWidth: "600px", margin: "auto" }}>
      <Grid container style={{ display: "contents" }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: "5px" }}>
            {!coverImage && (
              <CoverPhoto>
                <img src="/assets/coverdefault.jpg" alt="Username" />
              </CoverPhoto>
            )}
            <FormControl sx={{ display: "none" }}>
              <input
                id="cover-input"
                type="file"
                ref={fileInputRef}
                onChange={handleCoverImageChange}
                accept="image/*"
              />
            </FormControl>
            {coverImage && (
              <img
                src={URL.createObjectURL(coverImage)}
                alt="cover"
                style={{
                  width: "100%",
                  height: "150px",
                  marginTop: "41px",
                  position: "relative",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            )}
            <Grid item xs={12}>
              <IconButton
                sx={{
                  marginLeft: "90%",
                  marginTop: "-45px",
                  display: "flex",
                }}
                onClick={handleCoverImageChangeClick}
              >
                <CameraAlt />
              </IconButton>
            </Grid>

            {!profileImage && (
              <ProfilePhoto alt="Profile Photo">
                <Avatar />
              </ProfilePhoto>
            )}
            <FormControl sx={{ display: "none" }}>
              <input
                id="profile-input"
                type="file"
                ref={proFileInputRef}
                onChange={handleProfileImageChange}
                accept="image/*"
              />
            </FormControl>

            {profileImage && (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="profile"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%)",
                  width: "100px",
                  top: 140,
                  objectFit: "cover",
                  height: "100px",
                  border: "2px solid white",
                }}
              />
            )}

            <IconButton
              sx={{
                marginLeft: "50%",
                display: "flex",
                marginTop: "7px",
              }}
              onClick={handleProfileImageChangeClick}
            >
              <CameraAlt />
            </IconButton>

            <ProfileDetails>
              <Typography variant="h5" fontWeight={500} component="div">
                {userName || "Hydrogen Bond"}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {professionTitle || "Software Developer"}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {employmentStatus || "Unemployed"}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {address || "Harare, Zimbabwe"}
              </Typography>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <IconButton component={Link} to="/:userId/chat">
                  <Button variant="contained" color="primary">
                    Message
                  </Button>
                </IconButton>
                <IconButton component={Link} to="/:userId/profileForm">
                  <Edit color="primary" />
                </IconButton>
              </div>
            </ProfileDetails>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: 2 }}>
            <Typography variant="h6" component="div">
              Website
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {website || "N/A"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: 2 }}>
            <Typography variant="h6" component="div">
              Bio
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {bio || "N/A"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: 2 }}>
            <Typography variant="h6" component="div">
              Skills
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ alignItems: "center" }}
            >
              {keySkills || "N/A"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" component="div">
                Work Experience
              </Typography>
              <IconButton
                sx={{ right: "0px" }}
                component={Link}
                to="/:userId/profileForm/JobExperienceForm"
              >
                <Edit color="primary" />
              </IconButton>
            </div>
            <Typography variant="body2" color="textSecondary">
              {jobExperience || "N/A"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" component="div">
                Education
              </Typography>
              <IconButton
                sx={{ right: "0px" }}
                component={Link}
                to="/:userId/profileForm/educationInput"
              >
                <Edit color="primary" />
              </IconButton>
            </div>

            <Typography variant="body2" color="textSecondary">
              {education || "N/A"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
