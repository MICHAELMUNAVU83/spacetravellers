import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = []

export const fetchingMissionspi = createAsyncThunk('fetching from missions api', async()=>{
    const fetchedMissions = await axios.get('https://api.spacexdata.com/v3/missions').catch(err=>{
        console.log('error', err)
    })
    return fetchedMissions.data


})
const missionsSlice = createSlice({
    name : "missions",
    initialState,
    extraReducers:{
        [fetchingMissionspi.fulfilled]:(state, action)=>{
            return action.payload

        }

    }
})