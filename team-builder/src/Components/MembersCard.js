import React from "react";

function MembersCard({ teamMembers }) {
  // Variables
  let id = 0;

  // Component
  return (
    <div>
      {teamMembers.map((index) => {
        return (
          <div key={id++}>
            <h2>{index.name}</h2>
            <h3>{index.role}</h3>
            <p>{index.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MembersCard;
