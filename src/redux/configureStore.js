import { configureStore } from '@reduxjs/toolkit';
import misssionsReducer from './missions';

const store = configureStore({
  reducer: {
    missions: misssionsReducer,
  },
});
export default store;
