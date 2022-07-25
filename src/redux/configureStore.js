import { configureStore } from '@reduxjs/toolkit';
import misssionsReducer from './missions';
import rocketReducer from './rocket';

const store = configureStore({
  reducer: {
    missions: misssionsReducer,
    rockets: rocketReducer,
  },
});
export default store;
