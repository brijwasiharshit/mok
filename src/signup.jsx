import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import {
  Grid,
  ThemeProvider,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  InputLabel,
  createTheme,
} from "@material-ui/core";
import img1 from "./images/MOkx logo 1.png";
import { Stack } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const paperStyle = {
    color: "#680a82",
    padding: 30,
    height: "540px",
    width: 280,
    margin: "20px auto",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFD700", // Set the primary color to gold (#FFD700)
      },
    },
  });
  const avatarStyle = {
    backgroundColor: "white",
    color: "black",
    margin: "15px 0",
    size: 4,
  };
  const btnstyle = { marginTop: 45, marginBottom : 20 };
  const marginBottom = { marginBottom: 20 }; // Added margin bottom

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      // Perform signup or submit form logic here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent="center" style={{ color: "#680a82" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid container item justifyContent="left" alignItems="center">
        <Link href ="/onboarding">
              <WestIcon sx={{ marginRight: '88px' }} />
            </Link>
          <Avatar
            src={img1}
            sx={{
              maxHeight: { xs: 350, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
          />
    
        </Grid>
        <h3 align="center">Sign up with Email</h3>
        <h5 align="center">
          Welcome back! Sign in using your social account or email to continue
          us
        </h5>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={marginBottom}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={Boolean(emailError)}
            helperText={emailError}
            style={marginBottom}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={Boolean(passwordError)}
            helperText={passwordError}
            style={marginBottom}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
            style={marginBottom}
          />
          <Button
            
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Create an Account
          </Button>
        </form>
        
      </Paper>
    </Grid>
    </ThemeProvider>
  );
};

export default Signup;
