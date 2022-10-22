import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase";
import { Sns } from "./components/Sns";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Sns /> : <SignIn />}
    </div>
  );
}

export default App;
