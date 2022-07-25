import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchingMissionspi = createAsyncThunk('fetching from missions api', async () => {
  const fetchedMissions = await axios.get('https://api.spacexdata.com/v3/missions').catch((err) => {
    console.log('error', err);
  });
  const missionData = fetchedMissions.data;
  const fetchedEachMission = missionData.map((mission) => ({
    id: mission.mission_id.id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return fetchedEachMission;
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchingMissionspi.fulfilled]: (state, action) => action.payload,

  },
});

export default missionsSlice.reducer;
