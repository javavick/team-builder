import React, { useState } from "react";

function Form({ teamMembers, setTeamMembers }) {
  // Slice of State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  // Change Handler
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  // Submit Handler
  function submitHandler(event) {
    event.preventDefault();
    setTeamMembers([...teamMembers, formData]);
    event.target.reset();
  }

  // Component
  return (
    <div>
      <h1>Add Team Member</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name: <span></span>
          <input
            id="nameInput"
            name="name"
            type="text"
            onChange={changeHandler}
          />
        </label>
        <br />

        <label>
          Email: <span></span>
          <input
            id="emailInput"
            name="email"
            type="email"
            onChange={changeHandler}
          />
        </label>
        <br />

        <label>
          Role: <span></span>
          <select id="roleSelect" name="role" onChange={changeHandler}>
            <option value="No Role"></option>
            <option value="Front-End Engineer">Front-End Engineer</option>
            <option value="Back-End Engineer">Back-End Engineer</option>
            <option value="UX Designer">UX Designer</option>
          </select>
        </label>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
