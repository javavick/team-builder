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
    <form>
      <label>
        Name:
        <input
          id="nameInput"
          name="name"
          type="text"
          onChange={changeHandler}
        />
      </label>

      <label>
        Email:
        <input
          id="emailInput"
          name="email"
          type="email"
          onChange={changeHandler}
        />
      </label>

      <label>
        Role:
        <select id="roleSelect" name="role" onChange={changeHandler}>
          <option value="frontEnd">Front-End Engineer</option>
          <option value="backEnd">Back-End Engineer</option>
          <option value="designer">UX Designer</option>
          <option></option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}

export default Form;
