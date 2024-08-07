import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          width: "400px",
          height: "400px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <div>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500, fontSize: "35px", textAlign: "center" }}
          >
            Sign up
          </Typography>
          <Typography
            sx={{ marginBottom: "50px", textAlign: "center" }}
            variant="h6"
            gutterBottom
          >
            Just a few quick things to get started
          </Typography>
          <form style={{ marginBottom: "20px" }}>
            <FormControl sx={{ width: "100%", marginBottom: "20px" }}>
              <TextField id="username" variant="outlined" label="Username" />
            </FormControl>
            <FormControl sx={{ width: "100%", marginBottom: "20px" }}>
              <TextField id="email" variant="outlined" label="Email" />
            </FormControl>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="signup-password">Password</InputLabel>
              <OutlinedInput
                id="signup-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </form>
        </div>
        <Button
          variant="contained"
          fullWidth
          component={Link}
          to="/auth/signup/selectAccountType"
        >
          Create Account
        </Button>

        <Typography
          variant="body1"
          style={{ display: "flex", marginLeft: "70px", marginTop: "10px" }}
        >
          Already have an account?{" "}
          <nav>
            <a href="/auth/login">Log in</a>
          </nav>
        </Typography>
      </Paper>
    </Container>
  );
};
