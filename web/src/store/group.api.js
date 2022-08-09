import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteGroupApi = async (Group) => {
  const response = await axios.delete(`${API}/Groups/${Group.id}`);
  return parseItem(response, 200);
};

export const updateGroupApi = async (Group) => {
  captains.log(Group.id);
  const response = await axios.put(`${API}/Groups/${Group.id}`, Group);
  return parseItem(response, 200);
};

export const addGroupApi = async (Group) => {
  const response = await axios.post(`${API}/Groups`, Group);
  return parseItem(response, 201);
};

export const loadGroupsApi = async () => {
  const response = await axios.get(`${API}/Groups`);
  return parseList(response, 200);
};
