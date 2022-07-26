import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/dragons"
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Dragons
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Profile
        </NavLink>
      </nav>

    </div>
  );
}

export default Navbar;
