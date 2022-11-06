import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
import { Box, Input } from "@mui/material";

import { db, auth } from "../../firebase";

export const SendMessage = () => {
  const [message, setMessage] = useState("");

  const onChangeMessage = (e) => setMessage(e.target.value);

  const sendMessage = (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    if (message === "") return;
    addDoc(collection(db, "messages"), {
      text: message,
      photoURL,
      uid,
      createdAt: serverTimestamp()
    });
    setMessage("");
  };

  const inputStyle = {
    width: "78%",
    fontSize: "15px",
    fontWeight: "550",
    marginLeft: "5px",
    marginBottom: "-3px"
  };

  const sendMessageStyle = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    bottom: 0,
    zIndex: 1,
    borderTop: "1px solid lightgray",
    marginLeft: "-5px",
    padding: "10px",
    paddingBottom: "20px",
    backgroundColor: "#fafafa",
  };

  return (
    <form onSubmit={sendMessage}>
      <Box sx={sendMessageStyle}>
        <Input
          style={inputStyle}
          onChange={onChangeMessage}
          type="text"
          placeholder="メッセージを入力してください"
          value={message}
        />
        <SendIcon
          onClick={sendMessage}
          sx={{ color: "#7AC2FF", marginLeft: "20px" }}
        />
      </Box>
    </form>
  );
};