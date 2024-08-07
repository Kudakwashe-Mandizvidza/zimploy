import { IconButton, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { PostAppBar } from "../components/PostAppBar";
import { Email, Facebook, LinkedIn, WhatsApp, X } from "@mui/icons-material";

export const AboutDeveloper = () => {
  return (
    <Container>
      <PostAppBar />
      <Paper
        elevation={2}
        sx={{
          margin: "auto",
          marginTop: "100px",
          height: "370px",
          maxWidth: "500px",
          paddingBottom: "10px",
        }}
      >
        <img
          src="/assets/zimployLogo.jpeg"
          alt="Hydrogen Bond"
          style={{
            //border: "2px solid  lightgrey",
            borderRadius: "50%",
            marginTop: "10px",
            marginLeft: "36%",
            height: "100px",
            width: "100px",
            objectFit: "cover",
          }}
        />

        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Zimploy
        </Typography>
        <Typography variant="body1" sx={{ margin: "4px", textAlign: "center" }}>
          Hi! I'm Kudakwashe Mandizvidza
        </Typography>
        <Typography variant="body1" sx={{ margin: "4px", textAlign: "center" }}>
          A young self-taught Software Developer, CEO and a tech enthusiast. I
          am the founder and developer of Zimploy.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: "30px", textAlign: "center" }}
        >
          Join our Developer team
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "20px",
          }}
        >
          <IconButton href="https://www.facebook.com/profile.php?id=100077860902994">
            <Facebook color="primary" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/kudakwashe-mandizvidza-4214a6280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedIn color="primary" />
          </IconButton>
          <IconButton href="https://wa.me/+263787881255" >
            <WhatsApp sx={{ color: "green" }} />
          </IconButton>
          <IconButton href="https://x.com/Hydrogenbond03?t=qgjlLVh-nVYrsVPDLKbJZQ&s=09" >
            <X sx={{ color: "black" }} />
          </IconButton>
          <IconButton href="mailto:kudakwashehydrogenbond3@gmail.com" >
            <Email sx={{ color: "black" }} />
          </IconButton>
        </div>
      </Paper>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "30px" }}
      >
        Zimploy v1.0, Copyright © 2024
      </Typography>
    </Container>
  );
};
