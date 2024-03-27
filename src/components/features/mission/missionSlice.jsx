import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MISION_URL = "https://api.spacexdata.com/v3/missions";

export const fetchMissions = createAsyncThunk(
  "mission/fetchMissions",
  async () => {
    const response = await axios.get(MISION_URL);
    return response.data;
  }
);

const initialState = {
  missions: [],
  status: "idle",
  error: null,
};

const missionSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missions = state.missions.find(
        (result) => result.mission_id === action.payload
      );
      missions.reserved = !missions.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { joinMission } = missionSlice.actions;
export const selectAllMissions = (state) => state.missions.missions;
export const getMissionsStatus = (state) => state.missions.status;
export const getMissionsError = (state) => state.missions.error;
export const getReservedMissions = (state) =>
  state.missions.missions.filter((results) => results.reserved);

export default missionSlice.reducer;
