import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";

export const SignIn = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="signin">
      <Button style={{ fontSize: "25px" }} onClick={signIn}>グーグルでログイン</Button>
    </div>
  );
};