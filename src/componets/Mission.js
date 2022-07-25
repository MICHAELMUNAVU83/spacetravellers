import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchingMissionspi } from '../redux/missions';

function Mission() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchingMissionspi());
  }, [dispatch]);

  const ma = missions.map((mission) => (
    <div key={mission.id}>
      <p>
        {' '}
        {mission.id}
      </p>
      <p>
        {' '}
        {mission.mission_name}
      </p>
      <p>
        {' '}
        {mission.description}
      </p>
      {!mission.canceled && (<button type="button"> NOT A MEMBER</button>) }
      {mission.canceled && (<button type="button"> ACTIVE MEMBER</button>) }
      {!mission.canceled && (<button id={mission.id} type="button">JOIN MISSION</button>) }
      {mission.canceled && (<button id={mission.id} type="button">LEAVE MISSION</button>) }
    </div>
  ));
  return (
    <div>{ma}</div>
  );
}

export default Mission;
