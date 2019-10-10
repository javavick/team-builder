import React, { useState } from "react";

function Form() {
  // Slice of state for the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  // Change handler function
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  // The form itself
  return (
    <div>
      <h1>Team Member</h1>
      <form>
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
            <option value="none"></option>
            <option value="frontEnd">Front-End Engineer</option>
            <option value="backEnd">Back-End Engineer</option>
            <option value="designer">UX Designer</option>
          </select>
        </label>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
