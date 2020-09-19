import { all, fork } from 'redux-saga/effects';
import { watchSagasSmth } from './smth/sagas'

export const rootSaga = function* root() {
  yield all([fork(watchSagasSmth)]);
};