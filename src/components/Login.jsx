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
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "400px",
        height: "400px",
        padding: "20px",
        margin:'auto'
      }}
    >
      <div>
        <img
          src="/assets/zimployLOGO.jpeg"
          alt="zimply-logo"
          style={{
            width: "100px",
            display: "flex",
            position: "relative",
            left: "43%",
            transform: "translate(-50%)",
            borderRadius: "75%",
          }}
        />
        
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "30px", marginLeft: "70px" }}
          >
            Login to Zimploy
          </Typography>
          <Typography
            sx={{ marginBottom: "40px", marginLeft: "45px" }}
            variant="body1"
            color="text.secondary"
          >
            Inspiring connections, achieving goals!
          </Typography>
          <form style={{ marginBottom: "20px", marginRight: "20px" }}>
            <FormControl sx={{ width: "100%", marginBottom: "20px" }}>
              <TextField id="email-login" variant="outlined" label="Email" />
            </FormControl>
            <FormControl
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="login-password">Password</InputLabel>
              <OutlinedInput
                id="login-password"
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
            <nav style={{ textAlign: "right" }}>
              <a href="https://zimploy.com/password-recovery/userId">
                Forgot password?
              </a>
            </nav>
          </form>
        </div>

        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "95%" }}
          component={Link}
          to="/"
        >
          Login
        </Button>
        <div
          style={{ display: "block", marginLeft: "90px", marginTop: "10px" }}
        >
          <Typography variant="h7">Don't have an account?</Typography>
          <nav>
            <a
              style={{ marginLeft: "40px", color: "black" }}
              href="/auth/signup"
            >
              Sign up
            </a>
          </nav>
        </div>
      
    </Paper>
  );
};
