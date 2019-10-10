import React from "react";

function MembersCard({ teamMembers }) {
  return (
    <div>
      {teamMembers.map((index) => {
        <div>
          <h2>{index.name}</h2>
          <p>{index.email}</p>
          <p>{index.role}</p>
        </div>;
      })}
    </div>
  );
}

export default MembersCard;
