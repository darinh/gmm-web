import axios from 'axios';
import { parseItem, parseList } from '../action-utils';

const captains = console;

export const loginUser = async (redirectUrl: string) => {
  const response = await axios.get(`$/.auth/login?post_login_redirect_uri=${redirectUrl}`);
  return parseItem(response, 200);
};

export const logoutUser = async (redirectUrl: string) => {
  const response = await axios.get(`$/.auth/logout?post_logout_redirect_uri=${redirectUrl}`);
  return parseItem(response, 200);
};

export const loadUser = async () => {
  const response = await axios.put('/.auth/me');
  return parseItem(response, 200);
};
