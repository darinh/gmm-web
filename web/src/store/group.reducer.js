import {
  SELECT_GROUP,
  LOAD_GROUP_SUCCESS,
  LOAD_GROUP,
  LOAD_GROUP_ERROR,
  UPDATE_GROUP,
  UPDATE_GROUP_SUCCESS,
  UPDATE_GROUP_ERROR,
  DELETE_GROUP,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_ERROR,
  ADD_GROUP,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_ERROR,
} from './group.actions';

let initState = {
  loading: false,
  data: [],
  error: void 0,
};

export const groupsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_GROUP:
      return { ...state, loading: true, error: '' };
    case LOAD_GROUP_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_GROUP_ERROR:
      return { ...state, loading: false, error: 'Unauthorized' };

    case UPDATE_GROUP:
      return {
        ...state,
        data: state.data.map((h) => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        }),
      };
    case UPDATE_GROUP_SUCCESS:
      return modifyGroupState(state, action.payload);
    case UPDATE_GROUP_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_GROUP: {
      return {
        ...state,
        loading: true,
        data: state.data.filter((h) => h !== action.payload),
      };
    }

    case DELETE_GROUP_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case DELETE_GROUP_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload.requestData],
        loading: false,
      };
    }

    case ADD_GROUP: {
      return { ...state, loading: true };
    }

    case ADD_GROUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, { ...action.payload }],
      };
    }

    case ADD_GROUP_ERROR: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

const modifyGroupState = (groupState, groupChanges) => {
  return {
    ...groupState,
    loading: false,
    data: groupState.data.map((h) => {
      if (h.id === groupChanges.id) {
        return { ...h, ...groupChanges };
      } else {
        return h;
      }
    }),
  };
};

let initialSelectedGroup = null;

export const selectedGroupReducer = (
  state = initialSelectedGroup,
  action
) => {
  switch (action.type) {
    case SELECT_GROUP:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
