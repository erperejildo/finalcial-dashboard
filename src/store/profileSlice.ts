import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileData } from '../interfaces/ProfileData';

const initialState: ProfileData = {
  name: '',
  username: '',
  email: '',
  password: '',
  dateOfBirth: '',
  presentAddress: '',
  permanentAddress: '',
  city: '',
  postalCode: '',
  country: '',
  profilePicture: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileData>) => {
      return action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
