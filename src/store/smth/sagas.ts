import { put, takeEvery, call, select } from 'redux-saga/effects'
import { API } from "services/api";
import { types, actions } from "./actions";
// import { guards } from "services/api/guards";

function* fetchSmthDataSaga(action: any) {
    const { smth } = yield select((smth: {}) => smth)
    try {
        const results = yield call(API.FETCH_SMTH, { smth });
        // yield put(actions.saveSmth(guards.someGuard(results)))
    } catch (e) {
        console.error(e)
    }
}

export function* watchSagasSmth() {
    yield takeEvery(types.GET_SMTH, fetchSmthDataSaga)
}
