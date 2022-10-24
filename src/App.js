import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "./components/SignIn";
import { auth } from "./firebase";
import { Sns } from "./components/Sns";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Sns /> : <SignIn user={user} />}
    </div>
  );
}

export default App;
