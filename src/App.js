import { useRef, useState } from "react";
import "./App.css";

function App() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setuser] = useState("");
  const [validatName, setvalidatName] = useState("")
  const [userFoucs, setuserFoucs] = useState("")

  const [password, setPassword] = useState("");
    const [validatPassword, setvalidatPassword] = useState("");
  const [matchPassword, setMtchPassword] = useState("");

  return <div className="App">ggghjg</div>;
}

export default App;
