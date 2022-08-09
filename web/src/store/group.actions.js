export const LOAD_GROUP = '[Groups] LOAD_GROUP';
export const LOAD_GROUP_SUCCESS = '[Groups] LOAD_GROUP_SUCCESS';
export const LOAD_GROUP_ERROR = '[Groups] LOAD_GROUP_ERROR';

export const UPDATE_GROUP = '[Groups] UPDATE_GROUP';
export const UPDATE_GROUP_SUCCESS = '[Groups] UPDATE_GROUP_SUCCESS';
export const UPDATE_GROUP_ERROR = '[Groups] UPDATE_GROUP_ERROR';

export const DELETE_GROUP = '[Groups] DELETE_GROUP';
export const DELETE_GROUP_SUCCESS = '[Groups] DELETE_GROUP_SUCCESS';
export const DELETE_GROUP_ERROR = '[Groups] DELETE_GROUP_ERROR';

export const ADD_GROUP = '[Groups] ADD_GROUP';
export const ADD_GROUP_SUCCESS = '[Groups] ADD_GROUP_SUCCESS';
export const ADD_GROUP_ERROR = '[Groups] ADD_GROUP_ERROR';

export const SELECT_GROUP = '[Group] SELECT_GROUP';

export const selectGroupAction = (group) => ({
  type: SELECT_GROUP,
  payload: group,
});
export const loadGroupsAction = () => ({ type: LOAD_GROUP });

export const updateGroupAction = (group) => ({
  type: UPDATE_GROUP,
  payload: group,
});
export const deleteGroupAction = (group) => ({
  type: DELETE_GROUP,
  payload: group,
});
export const addGroupAction = (group) => ({
  type: ADD_GROUP,
  payload: group,
});
