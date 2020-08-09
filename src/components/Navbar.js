import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Students</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/update">Update</Link>
      </li>
    </ul>
  );
};

export default Navbar;
