import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchingMissionspi, joinMission } from '../redux/missions';

function Mission() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchingMissionspi());
  }, [dispatch]);
  const joinMissionEvent = (e) => {
    dispatch(joinMission((e.target.id)));
  };
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
      {!mission.join && (<button type="button"> NOT A MEMBER</button>) }
      {mission.join && (<button type="button"> ACTIVE MEMBER</button>) }
      {!mission.join && (<button id={mission.id} type="button" onClick={joinMissionEvent}>JOIN MISSION</button>) }
      {mission.join && (<button id={mission.id} type="button" onClick={joinMissionEvent}>LEAVE MISSION</button>) }
    </div>
  ));
  return (
    <div>{ma}</div>
  );
}

export default Mission;
