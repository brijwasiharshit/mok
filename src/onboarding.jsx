import { Grid, Paper } from "@material-ui/core";
import OnboaringBottom from "./onboarding_bottom";
import OnboaringTop from "./onboarding_top";

export default function Onboarding(){
  return(
    <div>
    <Grid container justifyContent="center" style={{ height: "80vh" }}>
      <Paper elevation={10} >
      <OnboaringTop />
      <OnboaringBottom  />
      </Paper>
    </Grid>
      
       </div>)
       ;}