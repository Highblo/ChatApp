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
        padding: "50px", 
        borderRadius: "10px 180px 180px" }}
      >
        <Typography variant="h1" align="center" color="#fafafa">ChatFriends</Typography>
        <Typography variant="h4" align="center" color="#fafafa">チャットして友達になろう！</Typography>
        <Box sx={{ textAlign: "center", marginTop: "110px" }}>
          <Button 
            variant="contained"
            onClick={signIn}
            size="large"
          >
            グーグルでログイン
          </Button>
        </Box>
      </Box>
      <Balloon backgroundColor={"#FFC766"} top={"70px"} right={"-20px"} animationDelay={"0.2s"}>こんにちは</Balloon>
      <Balloon backgroundColor={"#E88BC4"} top={"200px"} right={"-200px"} animationDelay={"0.6s"}>hello</Balloon>
      <Balloon backgroundColor={"#FBEBF5"} top={"400px"} right={"-140px"} animationDelay={"1.0s"}>你好</Balloon>
      <Balloon backgroundColor={"#6BF0E8"} top={"620px"} right={"-50px"} animationDelay={"0.8s"}>안녕하세요</Balloon>
      <Balloon backgroundColor={"#B9B5DF"} top={"800px"} right={"-150px"} animationDelay={"1.2s"}>Xin chào</Balloon>
      <Balloon backgroundColor={"#69D9F0"} bottom={"70px"} left={"-120px"} animationDelay={"0.3s"}>สวัสดีค่ะ</Balloon>
      <Balloon backgroundColor={"#91648B"} bottom={"250px"} left={"-20px"} animationDelay={"0.9s"}>नमस्कार</Balloon>
      <Balloon backgroundColor={"#6FA8DC"} bottom={"430px"} left={"-200px"} animationDelay={"0.5s"}>ជម្រាប សួរ។</Balloon>
      <Balloon backgroundColor={"#FFDD91"} bottom={"660px"} left={"-190px"} animationDelay={"1.1s"}>Magandang tanghali</Balloon>
      <Balloon backgroundColor={"#8FCE00"} bottom={"840px"} left={"-20px"} animationDelay={"1.3s"}>Selamat siang</Balloon>
    </Container>
  );
};