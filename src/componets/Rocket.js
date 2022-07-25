import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingRocketsApi, changeRocketReservation } from '../redux/rocket';

function Rocket() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchingRocketsApi());
  }, [dispatch]);
  const handleRocketResevation = (e) => {
    dispatch(changeRocketReservation(Number(e.target.id)));
  };
  const render = rockets.map((rocket) => (
    <div key={rocket.id}>
      <p>
        {' '}
        {rocket.id}
      </p>
      <p>
        {' '}
        {rocket.rocket_name}
      </p>
      <span>
        {rocket.reserved && (
          <button type="button">
            Reserved
          </button>
        )}
      </span>
      <p>
        {' '}
        {rocket.description}
      </p>
      <img src={rocket.flickr_image} alt="flick" />
      {!rocket.reserved && (
        <button id={rocket.id} type="button" onClick={handleRocketResevation}>
          RESERVE
        </button>
      )}
      {rocket.reserved && (
        <button id={rocket.id} type="button" onClick={handleRocketResevation}>
          CANCEL
        </button>
      )}
    </div>
  ));
  return (
    <div>
      {render}
    </div>
  );
}

export default Rocket;
