import { User, UserRole } from '../models/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API types
// /.auth/me
export type UserData = {
  clientPrincipal: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: UserRole[];
  };
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get<UserData>('/.auth/me');
  if (response.status !== 200) throw new Error(`Failed to fetch user: ${response.statusText}`);
  const payload: User = {
    id: response.data.clientPrincipal.userId,
    email: response.data.clientPrincipal.userDetails,
    roles: response.data.clientPrincipal.userRoles
  };
  console.dir(payload);
  return payload;
});
