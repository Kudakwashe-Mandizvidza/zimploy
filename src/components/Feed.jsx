import React from "react";
import { Post } from "./Post";
import { Button, Card } from "@mui/material";
import { Container } from "@mui/system";

export const Feed = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No posts found. Create one?</h2>
          <Button variant="outlined">Create Post</Button>
        </Card>
      </div>
    );
  }

  return (
    <Container sx={{marginTop:'50px', listStyle:'none', paddingBottom:'60px'}} >
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Container>
    
  );
};
