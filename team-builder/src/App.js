import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form.js";

function App() {
  // Slice of State
  const [teamMembers, setTeamMembers] = useState([]);

  // App
  return (
    <div className="App">
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
    </div>
  );
}

export default App;
