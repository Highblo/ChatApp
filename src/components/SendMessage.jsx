import { useState } from "react";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { db, auth } from "../firebase"; 

export const SendMessage = () => {
  const [message, setMessage] = useState();
  const onChangeMessage = (e) => setMessage(e.target.value);

  const sendMessage = (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser
    db.collection("messages")
      .add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
  const sendiconStyle = {
    color: "#7AC2FF",
    marginLeft: "20px"
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input style={inputStyle} onChange={onChangeMessage} type="text" placeholder="メッセージを入力してください" value={message} />
          <SendIcon style={sendiconStyle} />
        </div>
      </form>
    </div>
  );
};