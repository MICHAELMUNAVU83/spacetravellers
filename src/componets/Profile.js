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
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const newDragons = reservedDragons.map((reservedDragons) => (
    <div key={reservedDragons.id}>
      {' '}
      {reservedDragons.dragon_name}
      {' '}
    </div>
  ));
  return (
    <div>
      <h2>
        {' '}
        {newDragons}
        {newRockets}
      </h2>
    </div>
  );
}

export default Profile;
