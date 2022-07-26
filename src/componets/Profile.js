import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const newRockets = reservedRockets.map((reservedRocket) => (
    <div key={reservedRocket.id}>
      {' '}
      {reservedRocket.rocket_name}
      {' '}
    </div>
  ));
  return (
    <div>
      <h2>
        {' '}
        {newRockets}
      </h2>
    </div>
  );
}

export default Profile;
