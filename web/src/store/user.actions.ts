import { AnyAction } from 'redux';
import { setUser, UserData } from './user.slice';
import { RootState } from './store';
import { ThunkAction } from 'redux-thunk';

export const fetchUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  const response = await fetch('/.auth/me');
  const payload = (await response.json()) as UserData;
  console.dir(payload);
  dispatch(setUser(payload));
};
