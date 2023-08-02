import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Facebook, Google, Apple } from '@mui/icons-material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function OnboaringBottom() {
  const buttonStyle = {
    borderRadius: "60%",
    border: "1.5px solid white",
    width: "40px", // Adjust the width as needed
    height: "40px", // Set the height to the same value as width for a perfect circle
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin : 1.5
  };
  return (
    <div>
      <Box
        sx={{
          width: 400,
          minHeight : 400,
          backgroundColor: '#680a82',
          maxHeight: { xs: 350, md: 167 },
          maxWidth: { xs: 280, md: 250 },
        }}
      >
        <Box>
          <Typography
            variant="h6"
            color="#FFFFFF"
            sx={{
              marginLeft: 4,
              marginRight: 4,
              fontFamily: 'Kumbh Sans',
              fontWeight: '600',
              fontSize: 22,
              lineHeight: '1.5',
              paddingTop: 2,
            }}
          >
            Discover the <br /> timeless Wisdom of <span style={{ color: 'gold' }}>the Vedas</span>
          </Typography>
          <Typography
            color="#FFFFFF"
            sx={{
              marginLeft: 4,
              marginRight: 4,
              fontFamily: 'Inter',
              fontWeight: '600',
              fontSize: 12,
              lineHeight: '1.5',
              paddingTop: 2,
            }}
          >
            Sign up and journey through ancient knowledge with Arya 🌟
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
      <Button variant="outlined" startIcon={<Facebook sx={{ color: "white" }} />} style = { buttonStyle } />
      <Button variant="outlined" startIcon={<Google sx={{ color: "white" }} />} style = { buttonStyle }/>
      <Button variant="outlined" startIcon={<Apple sx={{ color: "white" }} />} style = { buttonStyle } />
    </Box>
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 5px' }}>
            <hr style={{ flex: '1', border: '1px solid #ccc' }} />
            <span style={{ padding: '0 10px', color: '#ccc', fontWeight: 'bold' }}>OR</span>
            <hr style={{ flex: '1', border: '1px solid #ccc' }} />
          </div>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Link to="/signup">
          <Button style={{ backgrouncolor: 'gold' }}
            variant="contained"
            sx={{
              backgroundColor: 'gold',
              width: "225px", // Adjust the width as needed
              paddingBottom: 1,
              paddingTop: 1,
            }}
          >
          Sign up with mail
          </Button>
          </Link>  
        </Box>
        <Box textAlign="center">
          
        <Typography color="#FFFFFF" sx={{ fontFamily: 'Inter', fontSize: 18, lineHeight: '1.5' }}>
            Existing account?   <Link to = "/login">
              <span style={{ color: 'gold' }}> Login</span> 
            </Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
