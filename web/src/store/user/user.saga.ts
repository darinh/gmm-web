import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_GROUP,
  LOAD_GROUP_SUCCESS,
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
import {
  addGroupApi,
  deleteGroupApi,
  loadGroupsApi,
  updateGroupApi,
} from './group.api';

export function* loadingGroupsAsync() {
  try {
    const data = yield call(loadGroupsApi);
    const groupes = [...data];

    yield put({ type: LOAD_GROUP_SUCCESS, payload: groupes });
  } catch (err) {
    yield put({ type: LOAD_GROUP_ERROR, payload: err.message });
  }
}

export function* watchLoadingGroupsAsync() {
  yield takeEvery(LOAD_GROUP, loadingGroupsAsync);
}

export function* updatingGroupAsync({ payload }) {
  try {
    const data = yield call(updateGroupApi, payload);
    const updatedGroup = data;

    yield put({ type: UPDATE_GROUP_SUCCESS, payload: updatedGroup });
  } catch (err) {
    yield put({ type: UPDATE_GROUP_ERROR, payload: err.message });
  }
}

export function* watchUpdatingGroupAsync() {
  yield takeEvery(UPDATE_GROUP, updatingGroupAsync);
}

export function* deletingGroupAsync({ payload }) {
  try {
    yield call(deleteGroupApi, payload);

    yield put({ type: DELETE_GROUP_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_GROUP_ERROR, payload: err.message });
  }
}

export function* watchDeletingGroupAsync() {
  yield takeEvery(DELETE_GROUP, deletingGroupAsync);
}

export function* addingGroupAsync({ payload }) {
  try {
    const data = yield call(addGroupApi, payload);
    const addedGroup = data;

    yield put({ type: ADD_GROUP_SUCCESS, payload: addedGroup });
  } catch (err) {
    yield put({ type: ADD_GROUP_ERROR, payload: err.message });
  }
}

export function* watchAddingGroupAsync() {
  yield takeEvery(ADD_GROUP, addingGroupAsync);
}

export function* groupSaga() {
  yield all([
    watchLoadingGroupsAsync(),
    watchUpdatingGroupAsync(),
    watchDeletingGroupAsync(),
    watchAddingGroupAsync(),
  ]);
}
