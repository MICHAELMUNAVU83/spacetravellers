import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/dragons">Dragons</Link>
        <Link to="/profile">Profile</Link>
      </nav>

    </div>
  );
}

export default Navbar;
