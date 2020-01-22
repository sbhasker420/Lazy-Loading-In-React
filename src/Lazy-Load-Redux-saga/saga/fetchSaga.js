import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchData$, setData$ } from "../store/actions";
import { getData } from "../services/fetch";

export function* fetchData() {
  try {
    const { counter, limit } = yield select();
    const filters = { counter, limit };
    const { data } = yield call(getData, filters);
    yield put(setData$.success({ data }));
  } catch (e) {
    console.log(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest(fetchData$.TRIGGER, fetchData);
}
