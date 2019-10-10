import React from "react";
import MembersCard from "./MembersCard.js";

function MembersList({ teamMembers }) {
  return (
    <div>
      <h1>List of Team Members</h1>
      <MembersCard teamMembers={teamMembers} />
    </div>
  );
}

export default MembersList;
