import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, {  useState } from "react";
import { PostAppBar } from "./PostAppBar";
import { Delete } from "@mui/icons-material";

export const PollsPost = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", ""]); //initially we have two empty choices
  const [allowMultipleChoices, setAllowMultipleChoices] = useState(false);

  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices((prevChoices) => {
      const newChoices = [...prevChoices, ""];
      return newChoices;
    });
  };

  const removeChoice = (index) => {
    if (choices.length > 2) {
      setChoices((prevChoices) => {
        const newChoices = [...prevChoices];
        newChoices.splice(index, 1);
        return newChoices;
      });
    }
  };

  const handleSubmit = () => {
    console.log("Question:", question);
    console.log("Choices:", choices);
  };



  return (
    <>
      <PostAppBar />
      <Paper elevation={0} sx={{ padding: "10px", position: "relative", marginTop:'10px', maxWidth:'600px', margin:'auto' }}>
        <Container sx={{ marginTop: "80px", width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Create a Poll
          </Typography>
          <form>
            <TextField
            
              label="Poll Question"
              fullWidth
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              margin="normal"
            />
            {choices.map((choice, index) => (
              <FormControl key={index} margin="normal" sx={{ display: "flex" }}>
                <Grid spacing={2} alignItems="center" container>
                  <Grid item>
                    <TextField
                      id={`choice-${index}`}
                      fullWidth
                      label={`Choice ${index + 1}`}
                      value={choice}
                      onChange={(e) =>
                        handleChoiceChange(index, e.target.value)
                      }
                    />
                  </Grid>
                  {index > 1 && (
                    <Grid item>
                      <IconButton
                        type="button"
                        onClick={() => removeChoice(index)}
                        disabled={choices.length <= 2}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </FormControl>
            ))}
            <Button
              type="button "
              variant="outlined"
              onClick={addChoice}
              sx={{ display: "flex", margin: "10px" }}
            >
              Add Choice
            </Button>
            <FormControlLabel
              control={<Checkbox />}
              checked={allowMultipleChoices}
              onChange={(e)=> setAllowMultipleChoices(e.target.checked)}
              label="Allow Multiple choices"
            />

            <Button fullWidth variant="contained" color="primary" onClick={handleSubmit} sx={{display:'block'}} >
              Post
            </Button>
          </form>
        </Container>
      </Paper>
    </>
  );
};
