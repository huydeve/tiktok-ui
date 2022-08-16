import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      data: true,
      isFetching: false,
      error: false,
    },
    deleteProfile: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile.data = action.payload;
    },

    deleteProfile: (state) => {
      state.deleteProfile.isFetching = false;
      state.profile.data = null;
      state.deleteProfile.error = false;
    },
 
  },
});

export const { setProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
