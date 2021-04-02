import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to='/login'>
        Login
      </NavLink>
      <NavLink to='/welcome'>
        Welcome
      </NavLink>
      <NavLink to='/cats'>
        Cats
      </NavLink>
    </div>
  );
}
