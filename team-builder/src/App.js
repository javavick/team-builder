import React from "react";
import "./App.css";

import Form from "./Components/Form.js";

function App() {
  // Slice of State
  const [teamMembers, setTeamMembers] = useState({});

  // App
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
