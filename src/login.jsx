import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  InputLabel,
} from "@material-ui/core";
import WestIcon from "@mui/icons-material/West";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/material/Box";
import { Facebook, Google, Apple } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 30,
    height: "520px",
    width: 280,
    margin: "20px auto",
  };
  const buttonStyle = {
    borderRadius: "60%",
    border: "1.5px solid black",
    width: "40px", // Adjust the width as needed
    height: "40px", // Set the height to the same value as width for a perfect circle
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin : 1.5
  };
  const avatarStyle = {
    backgroundColor: "white",
    color: "black",
    margin: "30px 0",
    size: 2,
  };
  const btnstyle = { margin: "20px 0" };
  const labelStyle = { fontSize: 14, fontWeight: "bold", marginBottom: 5 };

  // Function to handle changes in the email and password fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Check if both email and password are filled
  const isLoginDisabled = !email || !password;

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="left">
          <Avatar style={avatarStyle}>
            <Link to="/onboarding">
              <WestIcon />
            </Link>
          </Avatar>
        </Grid>
        <h3 style = {{color : "#680a82"}} align="center">Login to Mokx</h3>
        <h5 style = {{color : "#680a82"}} align="center">
          Welcome back! Sign in using your social account or email to continue
          us
        </h5>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 2 }}
        >
          <Button variant="contained" startIcon={<Facebook />} style = {buttonStyle} />
          <Button variant="contained" startIcon={<Google />} style = {buttonStyle} />
          <Button variant="contained" startIcon={<Apple />} style = {buttonStyle} />
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 5px",
          }}
        >
          <hr style={{ flex: "1", border: "1px solid #ccc" }} />
          <span
            style={{ padding: "0 10px", color: "#ccc", fontWeight: "bold" }}
          >
            OR
          </span>
          <hr style={{ flex: "1", border: "1px solid #ccc" }} />
        </div>
        <Grid item style={{ marginTop: 10 }}>
          <InputLabel htmlFor="username" style={labelStyle}>
            Your Email
          </InputLabel>
          <TextField
            id="username"
            name="email"
            fullWidth
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ marginTop: '0.5rem' }}>
          <InputLabel htmlFor="password" style={labelStyle}>
            Password
          </InputLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            fullWidth
            required
            onChange={handleInputChange}
          />
        </Grid>

        <Link to = "/chatbot">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          disabled={isLoginDisabled} // Disable the button if email or password is empty
        >
          Login
        </Button>
        </Link>
        <Typography align="center">
          <Link href="#">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
