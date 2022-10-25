import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "./components/SignIn";
import { auth } from "./firebase";
import { Chat } from "./components/Chat";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
