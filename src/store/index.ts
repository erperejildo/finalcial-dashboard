import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['profile/setProfile'],
        ignoredPaths: ['profile.profilePicture'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
