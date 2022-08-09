import { combineReducers } from 'redux';
import { selectedGroupReducer, groupsReducer } from './group.reducer';

export * from './group.actions';
export * from './group.reducer';
export * from './group.saga';

const store = combineReducers({
  groups: groupsReducer,
  selectedGroup: selectedGroupReducer,
});

export default store;
