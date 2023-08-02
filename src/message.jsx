import React from "react";
import { Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles"; // Update import statement for styled
import OnboaringBottom from "./onboarding_bottom";
import OnboaringTop from "./onboarding_top";
import WestIcon from "@mui/icons-material/West";
import myimg from "./images/Rectangle 1092.png";
import { Stack } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Link } from "react-router-dom";

const paperStyle = {
  color: "#680a82",
  padding: 0,
  height: "640px",
  width: 320,
  margin: "20px auto",
};

const BootstrapButton = styled(Button)({
  fontSize: 12,
  lineHeight: 1.5,
  backgroundColor: '#69235B',
  color: 'white',
  fontFamily: ['Inter'],
  '&:hover': {
    backgroundColor: '#69235B', // Set the hover background color to the same as the normal background color
  },
  borderTopLeftRadius: 0,
});

const goldBox = {
  backgroundColor: 'gold',
  width: 305,
  marginLeft: 9,
  fontSize: '0.85rem',
  textTransform: 'none'
};

export default function Onboarding() {
  return (
    <div>
      <Grid container justifyContent="center" style={{ height: "80vh" }}>
        <Paper style={paperStyle} elevation={10}>
          <Box>
            <Stack direction="row" spacing={0.5} justifyContent="space-between" sx={{ margin: 1.5 }}>
              <Stack direction="row" spacing={1} justifyContent="space-between">
                <Link to="/onboarding">
                  <WestIcon />
                </Link>
                <Avatar src={myimg} />
                <Box>
                  <Typography>
                    Arya
                  </Typography>
                  <Typography>
                    Vedic Bot
                  </Typography>
                </Box>
              </Stack>
              <Typography>A/क</Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={0.5} justifyContent="align-left">
              <Avatar src={myimg} sx = {{marginTop : '10px'}}/>
              <BootstrapButton variant="contained" sx = {{marginTop : '10px'}}>
                <Typography style={{ textTransform: 'none', textAlign: 'left' }}>
                  🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns. <br />
                  Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.
                </Typography>
              </BootstrapButton>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" justifyContent="center">
              <ElectricBoltIcon />
              <Typography>You can ask queries like:</Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Button style={goldBox}> <Typography>
                What is the mantra in Rigveda 10.2.3?
              </Typography></Button>
              <Button style={goldBox}><Typography>
                What are the prescribed Vedic remedies for snake bites?
              </Typography></Button>
              <Button style={goldBox}><Typography>
                Can you tell me the significance of the Gayatri Mantra?
              </Typography></Button>
            </Stack>
          </Box>
          <Stack direction="row" spacing={0.5} justifyContent="align-left" sx={{ marginTop: '10px' }}>
            <Avatar src={myimg} />
            <BootstrapButton variant="contained">
              <Typography style={{ textTransform: 'lowercase', textAlign: 'left' }}>
                Let your curiosity guide you; <br />
                wishing you blessings and enlightenment 🕉️
              </Typography>
            </BootstrapButton>
          </Stack>
          <TextField
            fullWidth
            variant="outlined"
            label="Write your message"
            InputProps={{
              endAdornment: (
                <>
                  <IconButton aria-label="send">
                    <SendIcon />
                  </IconButton>
                  <IconButton aria-label="voice-record">
                    <KeyboardVoiceIcon />
                  </IconButton>
                </>
              )
            }}
            style={{ borderRadius: 20, marginTop: '15px' }} 
          />
        </Paper>
      </Grid>
    </div>
  );
}
