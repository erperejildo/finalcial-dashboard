import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture: string;
}

const initialState: ProfileState = {
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
  profilePicture: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      return action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
