import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from "../components/features/rocket/rocketSlice"
import missionReducer from '../components/features/mission/missionSlice';
import themeReducer from '../components/features/theme/themeSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    theme: themeReducer
  },
});

export default store;