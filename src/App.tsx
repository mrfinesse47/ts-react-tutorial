import { useState } from "react";
import { user } from "./interfaces";
import "./App.css";

// interface AppProps {
//   headerText: string;
//   extraText?: string; //either a string or undefined -- try hovering over in vscode
// }

// function App({ headerText, extraText = "default text" }: AppProps) {
//   console.log(extraText);
//   return (
//     <div className="App">
//       <h1>{headerText}</h1>
//       {extraText && <p>Extra Text</p>}
//     </div>
//   );
// }

const App = () => {
  const [user, setUser] = useState<user | null>(null); //uses type inference

  const fetchUser = () => {
    setUser({
      name: "kevin",
      age: 28,
      country: "Canada",
      address: { street: "columbia", number: 23 },
      admin: false,
    });
  };

  return (
    <div className="App">
      <button onClick={fetchUser}>Fetch User On Click</button>
      {user && <p>Welcome {user.name}</p>}
    </div>
  );
};

export default App;
