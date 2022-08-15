import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type UserRole = 'anonymous' | 'authenticated';

export type UserData = {
  clientPrincipal: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: UserRole[];
  }
}

// Define a type for the slice state
type UserState = {
  currentUser?: UserData
}

// Define the initial state using that type
const initialState: UserState = {
  currentUser: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;