import { AnyAction } from 'redux';
import { setUser } from './user.slice';
import { RootState } from './store';
import { ThunkAction } from 'redux-thunk';
import { User, UserRole } from '../models/User';

// API types
// /.auth/me
export type UserData = {
  clientPrincipal: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: UserRole[];
  }
}

export const fetchUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  const response = await fetch('/.auth/me');
  const userData = (await response.json()) as UserData;
  const payload: User = {
    id: userData.clientPrincipal.userId,
    email: userData.clientPrincipal.userDetails,
    roles: userData.clientPrincipal.userRoles
  }
  console.dir(payload);
  dispatch(setUser(payload));
};
