import React, { useRef, useState } from "react";
import { PostAppBar } from "./PostAppBar";
import { Container } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export const MediaPost = ({ onAddPost }) => {
  const [media, setMedia] = useState(null);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
  };

  const handleMediaClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      media,
      caption,
      timestamp: new Date(),
    };
    onAddPost(newPost);
    setMedia(null);
    setCaption("");
  };

  return (
    <>
      <PostAppBar />
      <Container sx={{ maxWidth:'500px', margin:'auto', marginTop: "70px" }}>
        <Typography variant="h4" gutterBottom>
          Create a Media Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleMediaClick}
              >
                Add Media
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ display: "none" }}>
                <InputLabel htmlFor="media-input">Media</InputLabel>
                <input
                  id="media-input"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleMediaChange}
                  accept="image/*"
                />
              </FormControl>
            </Grid>
            {media && (
              <Grid item xs={12}>
                <Typography variant="body1">Media Preview:</Typography>
                {media.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(media)}
                    alt="Selected Media"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                ) : (
                  <video
                    controls
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  >
                    <source
                      src={URL.createObjectURL(media)}
                      type={media.type}
                    />
                  </video>
                )}
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                label="Caption"
                multiline
                rows={4}
                fullWidth
                placeholder="Write your caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
