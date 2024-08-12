import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

import { PostAppBar } from "../PostAppBar";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_FILE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/validators";

const ApplicationForm = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      education: {
        value: "",
        isValid: false,
      },
      skills: {
        value: "",
        isValid: false,
      },
      resume:{
        value:'',
        isValid:false,
      }
    },
    false
  );

  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    resume: null,
  });**/

  const applicationSubmitHandler = (event) => {
    event.preventDefault();
    if (!formState.resume) {
      console.log("Upload resume");
    }
    console.log(formState.inputs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    inputHandler((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    inputHandler((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  return (
    <Container maxWidth="sm">
      <PostAppBar />
      <Box
        component="form"
        onSubmit={applicationSubmitHandler}
        sx={{ mt: 3, marginTop: "60px" }}
      >
        <Typography variant="h4" gutterBottom>
          Application Form
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please enter a valid Name"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={handleChange}
          required
          onInput={inputHandler}
          validators={[VALIDATOR_MAXLENGTH(11)]}
          errorText="Please enter a valid phone number"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={formState.address}
          onChange={handleChange}
          required
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="education-label">Education</InputLabel>
          <Select
            labelId="education-label"
            name="education"
            value={formState.education}
            onChange={handleChange}
            required
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          >
            <MenuItem value="High School">High School</MenuItem>
            <MenuItem value="Associate Degree">Associate Degree</MenuItem>
            <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
            <MenuItem value="Master's Degree">Master's Degree</MenuItem>
            <MenuItem value="PhD">PhD</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Skills"
          name="skills"
          value={formState.skills}
          onChange={handleChange}
          required
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Resume
          <input
            type="file"
            hidden
            onChange={handleFileChange}
            required
            value={formState.resume}
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_FILE()]}
          />
        </Button>
        {formState.resume && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            {formState.resume.name}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, display: "block" }}
          fullWidth
          disabled={!formState.isValid}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ApplicationForm;
