import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <div className="user-img-top">
        <img
          src="https://plus.unsplash.com/premium_photo-1682093244743-29d7a6aee65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="team"
        />
      </div>
      <div className="user-details-bottom">
        <h2>Name:{name}</h2>
        <h3>Location:Hyderabad</h3>
        <h4>Contact:</h4>
      </div>
    </div>
  );
};
export default User;
