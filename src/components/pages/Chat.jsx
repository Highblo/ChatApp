import { useEffect, useState } from "react";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { Box } from "@mui/material";

import { SignOut } from "../organisms/SignOut";
import { auth, db } from "../../firebase";
import { SendMessage } from "../organisms/SendMessage";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const deta = collection(db, "messages");
    const q = query(deta, orderBy("createdAt"));
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <SignOut />
      <Box sx={{ margin: "110px 0", display: "flex", flexDirection: "column" }}>
        {messages.map(({ id, text, photoURL, uid }) => (
          <Box>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "send" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </Box>
        ))}
      </Box>
      <SendMessage />
    </>
  );
};
