import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form.js";
import MembersList from "./Components/MembersList.js";

function App() {
  // Slice of State
  const [teamMembers, setTeamMembers] = useState([]);

  // App
  return (
    <div className="App">
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <MembersList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
