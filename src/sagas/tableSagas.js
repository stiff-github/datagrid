import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as api from '../api';

function* editRow() {
  yield takeEvery('EDIT_ROW', callEditRow)
}

function* callEditRow({ row }) {
  try {
    yield call(api.editRow, row)
    yield put({ type: 'EDIT_ROW_SUCCEEDED', row })
  } catch (e) {
    yield put({ type: 'EDIT_ROW_FAILED' })
  }
}

function* deleteRow() {
  yield takeEvery('DELETE_ROW', callDeleteRow)
}

function* callDeleteRow({ id }) {
  try {
    yield call(api.deleteRow, id)
    yield put({ type: 'DELETE_ROW_SUCCEEDED', id })
  } catch (e) {
    yield put({ type: 'DELETE_ROW_FAILED' })
  }
}

function* initRows() {
  yield takeEvery('INIT_ROWS', callInitRows)
}

function* callInitRows() {
  try {
    const rows = yield call(api.getRows)
    yield put({ type: 'INIT_ROWS_SUCCEEDED', rows })
  } catch (e) {
    yield put({ type: 'INIT_ROWS_FAILED' })
  }
}

export default function* rootSaga() {
  yield all([
    editRow(),
    deleteRow(),
    initRows(),
  ])
}
