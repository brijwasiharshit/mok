import * as  React from "react";
import Avatar from '@mui/material/Avatar';
import img1 from "./images/cartoon-image-of-indian-girl-doing-namaste 1.png";

export default function OnboaringTop(){
  return(
    <Avatar src={img1} sx={{
      height: 204,
      width: 280,
      maxHeight: { xs: 350, md: 167 },
      maxWidth: { xs: 350, md: 250 },
      borderRadius: 0,
    }}/>
  );
}