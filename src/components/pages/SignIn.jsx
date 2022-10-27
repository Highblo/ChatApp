import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Container, Typography, Box } from "@mui/material";

import { auth } from "../../firebase";
import { Balloon } from "../atoms/Balloon";

export const SignIn = () => {

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Container sx={{
      position: "relative",
      height: "100vh",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" }}
    >
      <Box sx={{
        boxShadow: "0 10px 20px 3px #799",
        backgroundColor: "aqua", 
        padding: { xs: "25px", sm: "50px" },
        borderRadius: "10px 180px 180px",
        textAlign: "center" }}
      >
        <Typography color="#fafafa" sx={{ 
          fontSize: { xs: "2rem", sm: "3.5rem", md: "5rem" }}} 
        >
          ChatFriends
        </Typography>
        <Typography color="#fafafa" sx={{
          fontSize: { xs: "0.8rem", sm: "1.5rem", md: "1.8rem" } }} 
        >
          チャットして友達になろう！
        </Typography>
        <Box sx={{ textAlign: "center", marginTop: { xs: "50px", md: "100px" } }}>
          <Button 
            variant="contained"
            onClick={signIn}
            size="medium"
            sx={{ fontSize: { xs: "0.7rem", sm: "1.1rem"} }}
          >
            グーグルでログイン
          </Button>
        </Box>
      </Box>
        <Balloon 
          backgroundColor={"#FFC766"} 
          txs={15} tsm={140} right={10} 
          animationDelay={"0.2s"}
        >
          こんにちは
        </Balloon>
        <Balloon 
          backgroundColor={"#8FCE00"} 
          txs={15} tsm={140} left={10} 
          animationDelay={"1.0s"}
        >
          你好
        </Balloon>
        <Balloon 
          backgroundColor={"#E88BC4"} 
          bxs={15} bsm={140} right={10} 
          animationDelay={"0.6s"}
        >
          hello
        </Balloon>
        <Balloon 
          backgroundColor={"#6BF0E8"}
          bxs={15} bsm={140} left={10} 
          animationDelay={"0.8s"}
        >
          안녕하세요
        </Balloon>
        <Balloon 
          backgroundColor={"#FAAFF5"} 
          bsm={15} mxs={"none"} msm={"block"} right={"42%"} 
          animationDelay={"0.8s"}
        >
          नमस्ते
        </Balloon>
        <Balloon 
          backgroundColor={"#C0DD66"} 
          tsm={15} mxs={"none"} msm={"block"}  right={"42%"} 
          animationDelay={"0.8s"}
        >
          Bonjour
        </Balloon>
    </Container>
  );
};