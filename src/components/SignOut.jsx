import { Box, Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { auth } from "../firebase"; 

export const SignOut = () => {

  const header = {
    backgroundColor: "rgb(0, 204, 255)",
    color: "white",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  };

  return (
    <Box sx={header}>
      <Box sx={{ 
        maxWidth: "1200px",
        margin: "0 auto", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        height: "75px",
        padding: "0 8px"
        }}
      >
        <Button sx={{ color: "#fff" }} onClick={() => auth.signOut()}>
          <ExitToAppIcon fontSize="large"/>
        </Button>
        <Typography variant="h6">{auth.currentUser.displayName}</Typography>
        <Button sx={{ color: "#fff" }}>
          <CallIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};