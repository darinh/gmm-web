import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/User';
import type { RootState } from './store';
import { fetchUser } from './user.api';

// Define a type for the slice state
export type UserState = {
  loading: boolean;
  currentUser?: User;
}

// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  currentUser: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;