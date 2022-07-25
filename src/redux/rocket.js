import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
export const fetchingRocketsApi = createAsyncThunk(
  'fetching rocket api',
  async () => {
    const fetchedRockets = await axios
      .get('https://api.spacexdata.com/v3/rockets')
      .catch((err) => {
        console.log('error', err);
      });
    return fetchedRockets.data;
  },
);
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {},
});

export default rocketSlice.reducer;
