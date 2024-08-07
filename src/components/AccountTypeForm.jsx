import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountTypeForm = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole === "employer") {
      navigate("/auth/signup/selectAccountType/employer-registration");
    } else if (selectedRole === "employee") {
      navigate("/auth/signup/selectAccountType/employee-registration");
    } else {
      console.error("Please select a role");
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper elevation={0}>
        <IconButton sx={{ color: "black" }} onClick={handleBackClick}>
          <ArrowBack />
        </IconButton>
      </Paper>
      <Paper elevation={0} sx={{ marginTop: "60px", justifyContent: "center", }}>
        <Typography variant="h4" gutterBottom>
          Are you an Employer or an Employee?
        </Typography>
        <Grid container spacing={2} sx={{ width: "100%", height: "100%", display:'block',  }}>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{ width: "100%", height: "auto", }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Employer
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "15px" }}>
                  Are you looking to hire new talent, or looking for a great
                  team? Join as an employer to post job listings and connect
                  with potential candidates and best team players.
                </Typography>
                <Button
                  variant={
                    selectedRole === "employer" ? "contained" : "outlined"
                  }
                  onClick={() => handleRoleSelection("employer")}
                >
                  Select as Employer
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" sx={{ width: "100%", height: "auto" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Employee
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  Are you seeking new job opportunities, or developing your
                  skils? Join as an employee to create your profile, search for
                  jobs, and apply to openings.
                </Typography>
                <Button
                  variant={
                    selectedRole === "employee" ? "contained" : "outlined"
                  }
                  onClick={() => handleRoleSelection("employee")}
                >
                  Select as Employee
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={!selectedRole}
          style={{ width: "30%",marginLeft:'70%'}}
        >
          Next
        </Button>
        </Grid>
        </Grid>
       
       
      </Paper>
    </Container>
  );
};
