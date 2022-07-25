import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
export const fetchingDragonsApi = createAsyncThunk(
  'fetching dragon api',
  async () => {
    const fetchedDragons = await axios
      .get('https://api.spacexdata.com/v3/dragons')
      .catch((err) => {
        console.log('error', err);
      });
    return fetchedDragons.data;
  },
);
const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: {
    [fetchingDragonsApi.fulfilled]: (state, action) => action.payload,
  },
});

export default dragonSlice.reducer;
