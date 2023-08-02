import React, { useEffect } from "react";
import { Grid, Paper, Avatar, Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom"; 
import img1 from "./images/MOkx logo 1.png";
import { Facebook, Google, Apple } from "@mui/icons-material";

const Splash = () => {
  const paperStyle = {
    padding: 30,
    height: "540px",
    width: 280,
    margin: "20px auto",
  };
  const textStyle = {
    textAlign: "center",
    fontWeight: "bold",
    color: "#69235B",
    transform: "translateY(-2cm)",
  };
  const avatarContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const avatarStyle = {
    height: "150px",
    width: "150px",
    borderRadius: 0,
  };

  const navigate = useNavigate(); 

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

  
    return () => clearTimeout(timeout);
  }, [navigate]);

  const handlePageClick = () => {
   
    navigate("/onboarding");
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{ height: "100vh" }}
      onClick={handlePageClick} 
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid item xs={12} style={avatarContainerStyle}>
          <Avatar src={img1} style={avatarStyle} />
        </Grid>
        <Grid>
          <Typography style={textStyle}>Back to Vedas 🕉️</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Splash;
